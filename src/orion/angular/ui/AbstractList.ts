import { Input } from '@angular/core';

import { Timer } from '../../utils/Timer';
import { E4J } from '../../utils/E4J';
import { Objects } from '../../utils/Objects';
import { Reflection } from '../../utils/Reflection';
import { Strings } from '../../utils/Strings';
import { Keyboard } from '../../utils/Keyboard';
import { ArrayList } from '../../core/ArrayList';
import { AbstractField } from './AbstractField';
/**
 * Abstract implementation of a List component that provides bi-directional
 * rendering either via HTML mark-up definition or via an Array of objects.
 * 
 * <p>
 * When this component is instantiated, a look-up for a defined
 * {@link #dataProvider} will be done and if found, will be used to render the
 * internal elements generating new elements on the-fly. THis approach is also
 * knowing as data-driven based rendering which as the name states, uses the
 * data to render the user interface.
 * </p>
 * 
 * The second approach would be to use the already defined mark-up to drive the
 * rendering of visual elements. This approach is a lot faster, but does not
 * provide runtime changes, due the fact of having no way of monitoring the
 * changes.
 * 
 * @author orionframework
 * 
 * 
 */
export class AbstractList<T> extends AbstractField<T> {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /**
     * Event dispatched whenever the selection change under the list.
     * Parameters include:
     * 
     * <table class="events"> <thead>
     * <tr>
     * <td>Name</td>
     * <td>Type</td>
     * <td>Description</td>
     * </tr>
     * </thead> <tbody>
     * <tr>
     * <td>indices</td>
     * <td>{Array}</td>
     * <td>The array of selected indices</td>
     * </tr>
     * <tr>
     * <td>event</td>
     * <td>jQuery.Event</td>
     * <td>The event that originated the selection change (if any)</td>
     * </tr>
     * <tr>
     * <td>ui</td>
     * <td>Boolean</td>
     * <td>Flag indicating if the change was made via a user interaction or
     * straight from an API call</td>
     * </tr>
     * </tbody> </table>
     */
    public static readonly ON_SELECTION_CHANGE = "onSelectionChange";

    /**
     * Event dispathced whenever the dataProvider property changes.
     * Parameters include:
     * 
     * <table class="events"> <thead>
     * <tr>
     * <td>Name</td>
     * <td>Type</td>
     * <td>Description</td>
     * </tr>
     * </thead> <tbody>
     * <tr>
     * <td>oldValue</td>
     * <td>{ArrayList|null}</td>
     * <td>The old data provider</td>
     * </tr>
     * <tr>
     * <tr>
     * <td>newValue</td>
     * <td>{ArrayList|null}</td>
     * <td>The new data provider</td>
     * </tr>
     * <tr>
     * </tbody> </table>
     */
    public static readonly ON_DATA_PROVIDER_CHANGE = "onDataProviderChange";

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    protected lastSelectionEvent: any = null;
    protected lastSelectionUI: boolean = false;

    /**
     * The field used to extract the label property from an data item being
     * rendered. The default labelField used is <code>"label"</code> which
     * means your element in the dataProvider needs to contain the label
     * property. If your elements are not hash objects (primitive types)
     * they are simply converted to String.
     * 
     * @type String
     * 
     * @default "label"
     */
    @Input('labelField')
    public labelField: string = "label";

    /**
     * The function used to extract the label property from an data item
     * being rendered. The default labelFunction extracts the element's
     * labelField based on the defined {@link #labelField} property. When
     * dealing with simple objects (string, number) simply convert them to
     * string instead.
     * 
     * <p>
     * This function uses the following signature:
     * <code>function(data, column){}</code> and must return the label to
     * be used.
     * </p>
     * 
     * @type Function
     * 
     * @default function(data, column){ return data[labelField]; }
     */
    @Input('labelFunction')
    public labelFunction: (item: T) => string;

    /**
     * The field used to extract the single-value identifier from the
     * rendered data's object.
     * 
     * <p>
     * Being single-value, the extract value must be String, Date, Number or
     * int and is used to represent a unique value used to find a entry
     * within the rendered items on this list.
     * </p>
     * 
     * @type String
     * 
     * @default value
     * 
     * @see #itemToKey()
     */
    @Input('keyField')
    public keyField: string;

    /**
     * The function used to extract the key value from an item rendered on
     * this list. The default valueFunction just returns the given value
     * (second argument).
     * 
     * <p>
     * This function uses the following signature:
     * <code>function(item, value)</code> and must return the value used
     * by the given rendered item.
     * </p>
     * 
     * @type Function
     * 
     * @default null
     */
    @Input('keyFunction')
    public keyFunction: (item: T) => any;

    // ----------------------------------
    // selection
    // ----------------------------------

    /**
     * Storage for property <i>selectedKeys</i>
     */
    protected _selectedKeys: any[] = [];

    /**
     * Identifiers/keys of the currently selected items by this list.
     * 
     * @type Array
     * 
     * @default []
     */
    public get selectedKeys(): any[] {
        return this._selectedKeys;
    }

    /**
     * setter function for property <i>selectedKeys</i>
     * 
     * @param value
     */
    @Input('selectedKeys')
    public set selectedKeys(value: any[]) {

        let changed = this._selectedKeys != value;

        this._selectedKeys = value;

        if (changed) {

            Timer.defer(() => {

                /*
			     * trigger change
			     */
                this.dispatch(AbstractList.ON_SELECTION_CHANGE, [this._selectedKeys, this.lastSelectionEvent, this.lastSelectionUI]);

                this.lastSelectionUI = false;
                this.lastSelectionEvent = null;
            })
        }
    }

    /**
     * When using the keyboard to browse through elements rendered by this
     * list the usage of page down/up is based on the defined number of
     * elements per page. Pressing page down key, will move the selection
     * down {@link #pageSize} records.
     * 
     * @type int
     * 
     * @default 8
     */
    @Input('pageSize')
    public pageSize: number = 8;

    // -------------------------------------------------
    // GETS AND SETS
    // -------------------------------------------------

    // ----------------------------------
    // dataProvider
    // ----------------------------------

    /**
     * Storage for property <i>dataProvider</i>
     */
    protected _dataProvider: ArrayList<T>;

    /**
     * Collection (also accept plain Array) of elements used to drive the
     * rendering of items rendered by this widget. Whenever this collection
     * is modified, the change is automatically propagated to the user
     * interface.
     * 
     * <p>
     * Note that this property is what drives the rendering approach. If not
     * defined, falls back directly on using defined elements instead.
     * </p>
     * 
     * @type orion.core.ArrayList
     * 
     * @default null
     */
    public get dataProvider(): any {
        return this._dataProvider;
    }

    /**
     * The array of objects used to populate the main list. Each element in
     * the dataProvider represents a visual element in the list.
     * 
     * @param value
     *            the dataProvider to be applied
     * 
     * @return {orion.ui.container.AbstractList} self reference
     */
    @Input('dataProvider')
    public set dataProvider(value: any) {

        let oldValue = this._dataProvider;
        let newValue = this.processDataProvider(value);

        this._dataProvider = newValue;

        this.dispatch(AbstractList.ON_DATA_PROVIDER_CHANGE, [oldValue, newValue]);
    }

    // ----------------------------------
    // selectedValue
    // ----------------------------------

    /**
     * Look-up for the currently selected item's data.
     * 
     * @return {Object} the currently selected item's data or undefined if
     *         not selected
     */
    public get selectedValue(): T {

        return this.keyToData(this.selectedKey);
    }

    /**
     * Update the currently selected rows based on its data.
     * 
     * <p>
     * Similar to {@link #selectedKey()} but instead of holding the object's key
     * it stores the actual object.
     * </p>
     * 
     * @param value
     *            {Object} the data of the rendered item's to be selected
     * 
     * @return {orion.ui.container.AbstractList} self reference
     */
    @Input('selectedValue')
    public set selectedValue(value: T) {

        this.selectedKey = this.dataToKey(value);
    }

    // ----------------------------------
    // selectedValues
    // ----------------------------------

    /**
     * Look-up for the data elements of all currently selected rows under
     * this list.
     * 
     * @return {Array} selected data items
     */
    public get selectedValues(): T[] {

        return this.keysToData(this.selectedKeys);
    }

    /**
     * Look-up for the data elements of all currently selected rows under
     * this list.
     * 
     * @return {Array} selected data items
     */
    @Input('selectedValues')
    public set selectedValues(values: T[]) {

        this.selectedKeys = this.dataToKeys(values);
    }

    // ----------------------------------
    // selectedKey
    // ----------------------------------

    /**
     * Look-up for the key (identifier) value of the first selected item in
     * this list.
     * 
     * @return {Object} selected item's key/identifier
     */
    public get selectedKey(): any {

        let keys = this.selectedKeys

        return keys.length > 0 ? keys[0] : null;
    }

    /**
     * Update the currently selected item based on its given identifier
     * value.
     * 
     * @param value
     *            {Object} the item's key to be selected
     * 
     * @return {orion.ui.container.AbstractList} self reference
     */
    @Input('selectedKey')
    public set selectedKey(value: any) {

        var keys: any[] = Objects.isDefined(value) ? [value] : [];

        this.selectedKeys = keys;
    }

    // ----------------------------------
    // selectedIndex
    // ----------------------------------

    /**
     * Look-up for the index of the currently selected item in this list.
     * 
     * <p>
     * If there are multiple selected items, return the index of the first
     * one.
     * </p>
     * 
     * @return {int} the selected index or <code>-1</code> if nothing is
     *         selected
     */
    public get selectedIndex() {

        return this.keyToIndex(this.selectedKey);
    }

    /**
     * Update the currently selected items to the a new index.
     * 
     * @param value
     *            {int} the new selected index
     * 
     * @return {orion.ui.container.AbstractList} self reference
     */
    @Input('selectedIndex')
    public set selectedIndex(value) {

        this.selectedKey = this.indexToKey(value);
    }

    // ----------------------------------
    // selectedIndices
    // ----------------------------------

    /**
     * Look-up for the indices of all currently selected items under this
     * list.
     * 
     * @return {Array} selected indices
     */
    public get selectedIndices(): number[] {

        return this.keysToIndices(this.selectedKeys);
    }

    /**
     * Set the currently selected indices to this list. Skip property
     * change, even if setting a new collection with the same previous
     * indices.
     * 
     * @param value
     *            {Array} the new selected indices
     */
    @Input('selectedIndices')
    public set selectedIndices(value: number[]) {

        this.selectedKeys = this.indicesToKeys(value);
    }

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * CONSTRUCTORS
     *----------------------------------------------------------*/

    /**
     * Constructor
     */
    constructor() {
        super();
    }

    /*----------------------------------------------------------
     * END OF CONSTRUCTORS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    // -------------------------------------------------
    // public
    // -------------------------------------------------



    // ----------------------------------
    // dataTo...
    // ----------------------------------

    /**
     * Extract the label for the given data object based the defined
     * {@link #labelField} property as long as the given object is of a
     * complex object type. Otherwise, simply convert it to String.
     * Undefined/null are converted to an empty String.
     * 
     * <p>
     * Note that if a {@link #labelFunction} is defined, the same is given
     * preference and its result is used to evaluate the object label's
     * instead.
     * </p>
     * 
     * @param itemData
     *            {Object} the data we want the label for
     * 
     * @param column
     *            {Object} the column we are filtering by. This is usually
     *            undefined for single-column lists
     * 
     * @return {String} label representation of the given object value
     */
    public dataToLabel(itemData: T, column: any = null): string {

        let labelFunction = (column ? column.labelFunction : null)
            || this.labelFunction;

        let label = null;

        /*
         * give preference to labelFunction
         */
        if (Reflection.isFunction(labelFunction)) {

            label = labelFunction.call(self, itemData, column);

        } else if (Objects.isDefined(itemData)) {

            if (!Reflection.isSimple(itemData)) {

                let labelField = (column ? column.labelField : null)
                    || this.labelField;

                label = E4J.read(itemData, labelField);

            } else {

                label = itemData.toString();
            }
        }

        if (Objects.isDefined(label)) {

            return label;
        }

        return "";
    }

    /**
     * Extract the identifier for the given data object based the defined
     * {@link #keyField} property as long as the given object is of a
     * complex object type. Otherwise, simply convert return it as is.
     * 
     * <p>
     * Note that if a {@link #keyFunction} is defined, the same is given
     * preference and its result is used to evaluate the object identifier
     * instead.
     * </p>
     * 
     * @param itemData
     *            {Object} the data we want the identifier for
     * 
     * @return {Object} identifier (String, Number, int or Date)
     *         representing the given object
     */
    public dataToKey(itemData: T): any {

        /*
         * give preference to keyFunction
         */
        if (Reflection.isFunction(this.keyFunction)) {

            return this.keyFunction.call(self, itemData);
        }

        if (this.keyField && Objects.isDefined(itemData)) {

            return E4J.read(itemData, this.keyField);
        }

        return itemData;
    }

    /**
     * Same as {@link #dataToKey()} but passing an array of data items
     * instead of a single object. The result is also an array mapping each
     * given object with its keys.
     * 
     * @param dataItems
     *            {Array} array of objects to be converted
     * 
     * @return {Array} array of keys/identifiers for each given object
     */
    public dataToKeys(dataItems: T[]): any[] {

        let keys = [];

        for (let i = 0; i < dataItems.length; i++) {

            keys.push(this.dataToKey(dataItems[i]));
        }

        return keys;
    }

    /**
     * Translate the given data object to its index in the list
     * (dataProvider)
     * 
     * @param itemData
     *            {Object} the rendered item''s data
     * 
     * @return {int} the index of the given data element (if found) or -1
     *         otherwise
     */
    public dataToIndex(itemData: T): number {

        return this.dataProvider.indexOf(itemData);
    }

    /**
     * Translate the given item's data to its parent data provider
     * {@link orion.core.ArrayList}. For flat-lists, the result will
     * always be the defined {@link #dataProvider} for for hierarchical
     * lists the result shall be the parent collection that stores the data
     * being rendered by the given item. Be aware, that hierarchical lists
     * that deal with primitive types and repeated values underneath each
     * child may not be indexed properly.
     * 
     * @param item
     *            {Object} the rendered item's data
     * 
     * @return {orion.core.ArrayList} the item data's parent collection
     */
    public dataToDataProvider(itemData: T): ArrayList<T> {

        return this.dataProvider;
    }

    // ----------------------------------
    // keyTo...
    // ----------------------------------

    /**
     * Translate the given identifier to its label.
     * 
     * @param key
     *            {Object} the rendered item's identifier
     * 
     * @param column
     *            {Object} the column of the item we want the label for.
     *            This is usually undefined for single-column lists
     * 
     * @return label for the given rendered item's key
     */
    public keyToLabel(key: any, column?: any) {

        return this.dataToLabel(this.keyToData(key), column);
    }

    /**
     * Translate the given identifier to its label.
     * 
     * @param key
     *            {Object} the rendered item's identifier
     * 
     * @return label for the given rendered item's key
     */
    public keyToData(key: any): T {

        let result: any = null;

        this.dataProvider.each((index: number, itemData: T) => {

            if (this.dataToKey(itemData) === key) {

                result = itemData;

                return false;
            }

            return;
        });

        return result;
    }

    /**
     * Translate the given item's key to its index position on the list.
     * 
     * @param key
     *            {Object} the rendered item's identifier
     * 
     * @return current index position (-1 if does not exists)
     */
    public keyToIndex(key: any): number {

        return this.dataToIndex(this.keyToData(key));
    }

    /**
     * Translate the given item's key to its index position on the list.
     * 
     * @param key
     *            {Object} the rendered item's identifier
     * 
     * @return current index position (-1 if does not exists)
     */
    public keysToIndices(keys: any[]): number[] {

        let indices: number[] = [];

        Objects.each(keys, (i, key) => {

            let index = this.keyToIndex(key);

            if (index >= 0) {

                indices.push(index);
            }
        });

        return indices;
    }

    /**
     * Translate the given keys to its data elements.
     * 
     * @param keys
     *            {Object} the rendered item's identifier
     * 
     * @return list of keys
     */
    public keysToData(keys: any[]): T[] {

        let values: T[] = [];

        Objects.each(keys, (i, key) => {

            let itemData = this.keyToData(key);

            if (itemData) {

                values.push(itemData);
            }
        });

        return values;
    }

    // ----------------------------------
    // indexTo...
    // ----------------------------------

    /**
     * Translate the given index into its data element currently being
     * rendered.
     * 
     * @param {int}
     *            index the index of the item's data we want
     * 
     * @return {Object} item's data for the given index
     */
    public indexToData(index: number): T {

        return this.dataProvider.get(index);
    }

    /**
     * Translate the given array of indices to its respective rendered
     * item's data.
     * 
     * @param {Array}
     *            array of indices we want the data from
     * 
     * @return {Object} item's data for all given indices
     */
    public indicesToData(indices: number[]): T[] {

        let dataItems: T[] = [];

        Objects.each(indices, (i, index: number) => {

            dataItems.push(this.indexToData(index));
        });

        return dataItems;
    }

    /**
     * Translate the given array of indices to its mapped keys within each
     * rendered item.
     * 
     * @param {Array}
     *            array of indices we want the keys from
     * 
     * @return {Object} item's keys for all given indices
     */
    public indicesToKeys(indices: number[]): any[] {

        let keys: any[] = [];

        Objects.each(indices, (i, index: number) => {

            keys.push(this.indexToKey(index));
        });

        return keys;
    }

    /**
     * Translate the given array of indices to its respective rendered
     * item's key.
     * 
     * @param {Array}
     *            array of indices we want the data from
     * 
     * @return {Object} item's key for all given indices
     */
    public indicesToKey(indices: number[]): any[] {

        let keys: T[] = [];

        Objects.each(indices, (i, index: number) => {

            let key = this.indexToKey(index);

            if (key != null) {

                keys.push(key);
            }
        });

        return keys;
    }

    /**
     * Translate the given index to its item identifier.
     * 
     * @param index
     *            {int} the rendered item's identifier
     * 
     * @return {Object} the item's key obtained in the given index
     */
    public indexToKey(index: number): any {

        if (index >= 0) {

            return this.dataToKey(this.indexToData(index));
        }

        return null;
    }

    // ----------------------------------
    // label
    // ----------------------------------

    /**
     * Translate the given label to its data item. Note that labels cannot
     * be considered unique, which in this case indicates that the first
     * item that matches the given label is returned. To a unique object
     * finding, consider using {@link #keyToData()} instead.
     * 
     * @param label
     *            {String} the item's label
     * 
     * @param column
     *            {Object} the column of the item we want the data for. This
     *            is usually undefined for single-column lists
     * 
     * @return {Object} the data item that maps the given label.
     */
    public labelToData(label: string, column?: any): T | null {

        let result: T | null = null;

        this.dataProvider.each((index: number, itemData: T) => {

            if (this.dataToLabel(itemData, column) == label) {

                result = itemData;

                return false;
            }

            return;
        });

        return result;
    }

    // ----------------------------------
    // find
    // ----------------------------------

    /**
     * Find an item's data by its label
     * 
     * @param value
     *            {String} the label we of the item we are trying to find
     * 
     * @param offset
     *            {int} the index we want to start searching from
     * 
     * @param filter
     *            {Function} the function used to filter for the entered
     *            label and matched values. Defaults to
     *            {@link Strings#startsWith()}
     * 
     * @param column
     *            {Object} the column of the item we are searching for
     * 
     * @return {Object} the object that matches the given label or null if
     *         not found
     */
    public findData(value: string, offset?: number, filter?: (value: string, label: string) => boolean, column?: any): T | null {

        if (value) {

            var source = this.dataProvider.source;

            var filterFunction: Function = (filter || Strings.startsWith);

            offset = Math.max(offset || 0, 0);

            for (let i = offset; i < source.length; i++) {

                var itemData = source[i];

                if (! !Objects.isDefined(itemData)) {
                    continue;
                }

                var label = this.dataToLabel(itemData, column);

                if (label && filterFunction(label, value, false)) {

                    return itemData;
                }
            }
        }

        return null;
    }

    // ----------------------------------
    // selection
    // ----------------------------------

    /**
     * Check rather the given value is currently selected or not.
     * 
     * @param itemData 
     * 
     * @return true if selected, false otherwise
     */
    public isSelectedData(itemData: T): boolean {

        return this.selectedValues.indexOf(itemData) >= 0;
    }

    /**
     * Check rather the given key is currently selected or not.
     * 
     * @param itemData 
     * 
     * @return true if selected, false otherwise
     */
    public isSelectedKey(key: any): boolean {

        return this.selectedKeys.indexOf(key) >= 0;
    }

    /**
     * Check rather the given object's index is currently selected or not.
     * 
     * @param itemData 
     * 
     * @return true if selected, false otherwise
     */
    public isSelectedIndex(index: number): boolean {

        return this.selectedIndices.indexOf(index) >= 0;
    }

    /**
     * Attach the given selection event (keyboard) allowing the user to use the navigation keys
     * to control the selected items by navigating through them.
     * 
     * @param event
     *            the event driving the list seleection changes.
     */
    public selectionHandler(event: any): boolean {

        var changed = true;

        switch (event.keyCode) {

            case Keyboard.UP_ARROW:
                // case Keyboard.LEFT_ARROW:

                event.preventDefault();

                this.prev();

                break;

            case Keyboard.DOWN_ARROW:
                // case Keyboard.RIGHT_ARROW:

                event.preventDefault();

                this.next();

                break;

            case Keyboard.PAGE_UP:

                event.preventDefault();

                this.pageUp();

                break;

            case Keyboard.PAGE_DOWN:

                event.preventDefault();

                this.pageDown();

                break;

            case Keyboard.ENTER:

                /*
                 * simulate click on enter for selected items
                 */
                //this.getSelectedItems().click();

                /*
                 * prevent enter to avoid submitting
                 */
                return false;

            default:

                changed = false;
        }

        if (changed) {

            this.lastSelectionEvent = event;
            this.lastSelectionUI = true;
        }

        return true;
    }

    /**
     * Move the selection after the currently selected item.
     * 
     * <p>
     * If no item is selected, select first.
     * </p>
     * 
     * @return {orion.ui.container.AbstractList} self reference
     */
    public next(): AbstractList<T> {

        return this.moveSelection(1);
    }

    /**
     * Move the selection to the previous selected item.
     * 
     * <p>
     * If no item is selected, select first.
     * </p>
     * 
     * @return {orion.ui.container.AbstractList} self reference
     */
    public prev(): AbstractList<T> {

        return this.moveSelection(-1);
    }

    /**
     * Move the selection one page up to the currently selected item.
     * 
     * <p>
     * If no item is selected, select first.
     * </p>
     * 
     * A page is accountable for {@link #pageSize} items.
     * 
     * @return {orion.ui.container.AbstractList} self reference
     */
    public pageUp(): AbstractList<T> {

        var page = this.pageSize;
        var index = this.selectedIndex;

        if (index !== 0 && index - page < 0) {

            return this.moveSelection(-index);

        } else {

            return this.moveSelection(-page);
        }
    }

    /**
     * Move the selection one page down to the currently selected item.
     * 
     * <p>
     * If no item is selected, select first.
     * </p>
     * 
     * A page is accountable for {@link #pageSize} items.
     * 
     * @return {orion.ui.container.AbstractList} self reference
     */
    public pageDown(): AbstractList<T> {

        var page = this.pageSize;
        var length = this._dataProvider.length;
        var index = this.selectedIndex;

        if (index != length - 1 && index + page > length) {

            return this.moveSelection(length - 1 - index);

        } else {

            return this.moveSelection(page);
        }
    }

    /**
     * Move the selection of the item rendered rows in this list.
     * 
     * @param step
     *            {int} the number of items we want to move the selection
     * 
     * @return {orion.ui.container.AbstractList} self reference
     */
    public moveSelection(step: number): AbstractList<T> {

        var index = this.selectedIndex + step;

        if (index < 0) {

            index = this._dataProvider.length - 1;

        } else if (index >= this._dataProvider.length) {

            index = 0;

        }
        this.selectedIndex = index;

        return this;
    }

    /**
     * Clear selection of all selected elements in this list.
     * 
     * @return {orion.ui.container.AbstractList} self reference
     */
    public clearSelection(): AbstractList<T> {

        this.selectedIndices = [];

        return this;
    }

    // -------------------------------------------------
    // protected
    // -------------------------------------------------

    /**
     * Process the given dataProvider before it can be set as the new data
     * provider of this list.
     * 
     * @param value
     *            {Object} the data provider being set
     * 
     * @return {orion.core.ArrayList} processed data provider
     */
    protected processDataProvider(value: any): ArrayList<T> {

        return ArrayList.toArrayList(value);
    }

    // -------------------------------------------------
    // private
    // -------------------------------------------------

    // -------------------------------------------------
    // static
    // -------------------------------------------------

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/

}
