import { Input } from '@angular/core';
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
export declare class AbstractList<T> extends AbstractField<T> {
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
    static ON_SELECTION_CHANGE: string;
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
    static ON_DATA_PROVIDER_CHANGE: string;
    protected lastSelectionEvent: any;
    protected lastSelectionUI: boolean;
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
    labelField: string;
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
    labelFunction: (item: T) => string;
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
    keyField: string;
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
    keyFunction: (item: T) => any;
    /**
     * Storage for property <i>selectedKeys</i>
     */
    protected _selectedKeys: any[];
    /**
     * Identifiers/keys of the currently selected items by this list.
     *
     * @type Array
     *
     * @default []
     */
    /**
     * setter function for property <i>selectedKeys</i>
     *
     * @param value
     */
    selectedKeys: any[];
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
    pageSize: number;
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
    dataProvider: any;
    /**
     * Look-up for the currently selected item's data.
     *
     * @return {Object} the currently selected item's data or undefined if
     *         not selected
     */
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
    selectedValue: T;
    /**
     * Look-up for the data elements of all currently selected rows under
     * this list.
     *
     * @return {Array} selected data items
     */
    /**
     * Look-up for the data elements of all currently selected rows under
     * this list.
     *
     * @return {Array} selected data items
     */
    selectedValues: T[];
    /**
     * Look-up for the key (identifier) value of the first selected item in
     * this list.
     *
     * @return {Object} selected item's key/identifier
     */
    /**
     * Update the currently selected item based on its given identifier
     * value.
     *
     * @param value
     *            {Object} the item's key to be selected
     *
     * @return {orion.ui.container.AbstractList} self reference
     */
    selectedKey: any;
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
    /**
     * Update the currently selected items to the a new index.
     *
     * @param value
     *            {int} the new selected index
     *
     * @return {orion.ui.container.AbstractList} self reference
     */
    selectedIndex: number;
    /**
     * Look-up for the indices of all currently selected items under this
     * list.
     *
     * @return {Array} selected indices
     */
    /**
     * Set the currently selected indices to this list. Skip property
     * change, even if setting a new collection with the same previous
     * indices.
     *
     * @param value
     *            {Array} the new selected indices
     */
    selectedIndices: number[];
    /**
     * Constructor
     */
    constructor();
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
    dataToLabel(itemData: T, column?: any): string;
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
    dataToKey(itemData: T): any;
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
    dataToKeys(dataItems: T[]): any[];
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
    dataToIndex(itemData: T): number;
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
    dataToDataProvider(itemData: T): ArrayList<T>;
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
    keyToLabel(key: any, column?: any): string;
    /**
     * Translate the given identifier to its label.
     *
     * @param key
     *            {Object} the rendered item's identifier
     *
     * @return label for the given rendered item's key
     */
    keyToData(key: any): T;
    /**
     * Translate the given item's key to its index position on the list.
     *
     * @param key
     *            {Object} the rendered item's identifier
     *
     * @return current index position (-1 if does not exists)
     */
    keyToIndex(key: any): number;
    /**
     * Translate the given item's key to its index position on the list.
     *
     * @param key
     *            {Object} the rendered item's identifier
     *
     * @return current index position (-1 if does not exists)
     */
    keysToIndices(keys: any[]): number[];
    /**
     * Translate the given keys to its data elements.
     *
     * @param keys
     *            {Object} the rendered item's identifier
     *
     * @return list of keys
     */
    keysToData(keys: any[]): T[];
    /**
     * Translate the given index into its data element currently being
     * rendered.
     *
     * @param {int}
     *            index the index of the item's data we want
     *
     * @return {Object} item's data for the given index
     */
    indexToData(index: number): T;
    /**
     * Translate the given array of indices to its respective rendered
     * item's data.
     *
     * @param {Array}
     *            array of indices we want the data from
     *
     * @return {Object} item's data for all given indices
     */
    indicesToData(indices: number[]): T[];
    /**
     * Translate the given array of indices to its mapped keys within each
     * rendered item.
     *
     * @param {Array}
     *            array of indices we want the keys from
     *
     * @return {Object} item's keys for all given indices
     */
    indicesToKeys(indices: number[]): any[];
    /**
     * Translate the given array of indices to its respective rendered
     * item's key.
     *
     * @param {Array}
     *            array of indices we want the data from
     *
     * @return {Object} item's key for all given indices
     */
    indicesToKey(indices: number[]): any[];
    /**
     * Translate the given index to its item identifier.
     *
     * @param index
     *            {int} the rendered item's identifier
     *
     * @return {Object} the item's key obtained in the given index
     */
    indexToKey(index: number): any;
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
    labelToData(label: string, column?: any): T | null;
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
    findData(value: string, offset?: number, filter?: (value: string, label: string) => boolean, column?: any): T | null;
    /**
     * Check rather the given value is currently selected or not.
     *
     * @param itemData
     *
     * @return true if selected, false otherwise
     */
    isSelectedData(itemData: T): boolean;
    /**
     * Check rather the given key is currently selected or not.
     *
     * @param itemData
     *
     * @return true if selected, false otherwise
     */
    isSelectedKey(key: any): boolean;
    /**
     * Check rather the given object's index is currently selected or not.
     *
     * @param itemData
     *
     * @return true if selected, false otherwise
     */
    isSelectedIndex(index: number): boolean;
    /**
     * Attach the given selection event (keyboard) allowing the user to use the navigation keys
     * to control the selected items by navigating through them.
     *
     * @param event
     *            the event driving the list seleection changes.
     */
    selectionHandler(event: any): boolean;
    /**
     * Move the selection after the currently selected item.
     *
     * <p>
     * If no item is selected, select first.
     * </p>
     *
     * @return {orion.ui.container.AbstractList} self reference
     */
    next(): AbstractList<T>;
    /**
     * Move the selection to the previous selected item.
     *
     * <p>
     * If no item is selected, select first.
     * </p>
     *
     * @return {orion.ui.container.AbstractList} self reference
     */
    prev(): AbstractList<T>;
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
    pageUp(): AbstractList<T>;
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
    pageDown(): AbstractList<T>;
    /**
     * Move the selection of the item rendered rows in this list.
     *
     * @param step
     *            {int} the number of items we want to move the selection
     *
     * @return {orion.ui.container.AbstractList} self reference
     */
    moveSelection(step: number): AbstractList<T>;
    /**
     * Clear selection of all selected elements in this list.
     *
     * @return {orion.ui.container.AbstractList} self reference
     */
    clearSelection(): AbstractList<T>;
    /**
     * Process the given dataProvider before it can be set as the new data
     * provider of this list.
     *
     * @param value
     *            {Object} the data provider being set
     *
     * @return {orion.core.ArrayList} processed data provider
     */
    protected processDataProvider(value: any): ArrayList<T>;
}
