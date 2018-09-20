
import { EventDispatcher } from "./EventDispatcher";
import { Query } from "../query/Query";
import { Arrays } from "../utils/Arrays";
import { Objects } from "../utils/Objects";
import { Timer } from "../utils/Timer";

/**
 * The ArrayList class is a simple implementation of a list that uses a backing
 * Array as the source of the this. Items in the backing Array can be accessed
 * and manipulated using the methods and properties defined by this class.
 * Operations on an ArrayList instance modify the data source; for example, if
 * you use the removeItemAt() method on an ArrayList, you remove the item from
 * the underlying Array.
 * 
 * <p>
 * This class makes usage of the {@link orion.core.EventDispatcher} to track and
 * dispatch events notifying changes. Making changes to the underlying source
 * <code>Array</code> will cause the changes notification not to be
 * dispatched, so prefer making changes through the ArrayList this.
 * </p>
 * 
 * <p>
 * <b>Events:</b>
 * </p>
 * 
 * The event <code>ArrayList.ON_CHANGE</code> is dispatched whenever a change
 * is performed within the collection. The change kind and the items changes are
 * included within the dispatched event. The following table maps the change
 * types:
 * 
 * <ul>
 * <li><b>ArrayList.ADD</b>: Event dispatched whenever new items are added to
 * the collection</li>
 * <li><b>ArrayList.REMOVE</b>: Event dispatched whenever existing items are
 * removed from the collection</li>
 * <li><b>ArrayList.MOVE</b>: Event dispatched whenever an item's position is
 * changed within the collection</li>
 * <li><b>ArrayList.REPLACE</b>: Event dispatched when an item is replaced in
 * collection</li>
 * <li><b>ArrayList.RESET</b>: Event dispatched whenever the source of the
 * collection is replaced or all items are removed from the collection at once
 * (see {@link #clear()}).</li>
 * <li><b>ArrayList.UPDATE</b>: Because JS objects don't allow for tracking
 * changes on a simple <code>Object</code> it is not possible for the
 * <code>ArrayList</code> to know when something was changed within a data
 * item, so making the usage of the manual data change notification is required
 * by calling {@link #updated(items)}. This is important for elements working
 * with data-driven components using as source an ArrayList.</li>
 * </ul>
 * 
 * <ul class="import">
 * </ul>
 * 
 * @class
 * @name orion.core.ArrayList
 * 
 * @augments orion.core.EventDispatcher
 * 
 * @author orionframework
 * 
 * 
 */
export class ArrayList<T extends Object=Object> extends EventDispatcher {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /**
     * Indicates that the collection added one or multiple items.
     */
    public static readonly ADD = "add";

    /**
     * Indicates that the item has moved from the position identified by the
     * CollectionEvent oldLocation property to the position identified by
     * the location property.
     */
    public static readonly MOVE = "move";

    /**
     * Indicates that the collection applied a sort, a filter, or both.
     */
    public static readonly REFRESH = "refresh";

    /**
     * Indicates that the collection removed an item or items.
     */
    public static readonly REMOVE = "remove";

    /**
     * Indicates that the item at the position identified by the
     * CollectionEvent location property has been replaced.
     */
    public static readonly REPLACE = "replace";

    /**
     * Indicates that the collection has changed so drastically that a reset
     * is required.
     */
    public static readonly RESET = "reset";

    /**
     * Indicates that one or more items were updated within the collection.
     */
    public static readonly UPDATE = "update";

    // ----------------------------------
    // EVENTS
    // ----------------------------------

    /**
     * Event dispatched whenever this collection suffers any kind of change.
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
     * <td>kind</td>
     * <td>String</td>
     * <td>The type of change occurred. These are mapped by constants such
     * as {@link #REFRESH}, {@link #ADD}, {@link #UPDATE},
     * {@link #REMOVE} and so on.</td>
     * </tr>
     * <tr>
     * <td>items</td>
     * <td>Array</td>
     * <td>The array of items that have changed. The structure of this
     * parameter may change according to the kind of change occurred.</td>
     * </tr>
     * <tr>
     * <td>index</td>
     * <td>int</td>
     * <td>A last parameter only passed for changes that are offset to a
     * given index (like {@link #addAt()}, {@link #moveAt()} and so on) and
     * represents the starting index for the occurred change (AKA the same
     * given index of the invoked method).</td>
     * </tr>
     * </tbody> </table>
     * 
     * @event
     */
    public static readonly ON_CHANGE = "onChange";

    /**
     * Event dispatched whenever a filter has been applied to this
     * collection, therefore removing items temporarily from its content.
     * Note that even although some of the elements may be 'invisible' when
     * filtered, they are still present in the {@link #source} property.
     * Also, making changes to the collection while in filter mode is on
     * will cause in unexpected behavior. Parameters include:
     * 
     * <table class="events"> <thead>
     * <tr>
     * <td>Name</td>
     * <td>Type</td>
     * <td>Description</td>
     * </tr>
     * </thead> <tbody>
     * <tr>
     * <td>query</td>
     * <td>orion.query.Query</td>
     * <td>The query used to filter this collection</td>
     * </tr>
     * <tr>
     * <td>items</td>
     * <td>Array</td>
     * <td>The array of items currently visible under this collection</td>
     * </tr>
     * </tbody> </table>
     * 
     * @event
     */
    public static readonly ON_FILTER = "onFilter";

    /**
     * Event dispatched whenever a sort has been applied to this collection,
     * therefore moving items to a new position. Parameters include:
     * 
     * <table class="events"> <thead>
     * <tr>
     * <td>Name</td>
     * <td>Type</td>
     * <td>Description</td>
     * </tr>
     * </thead> <tbody>
     * <tr>
     * <td>query</td>
     * <td>orion.query.Query</td>
     * <td>The query used to sort this collection</td>
     * </tr>
     * </tbody> </table>
     * 
     * @event
     */
    public static readonly ON_SORT = "onSort";

    /**
     * Event dispatched whenever a grouping by clause has been applied to
     * this collection, therefore reducing the visibility of its items
     * according to the defined clause. Parameters include:
     * 
     * <table class="events"> <thead>
     * <tr>
     * <td>Name</td>
     * <td>Type</td>
     * <td>Description</td>
     * </tr>
     * </thead> <tbody>
     * <tr>
     * <td>query</td>
     * <td>orion.query.Query</td>
     * <td>The query used to sort this collection</td>
     * </tr>
     * <tr>
     * <td>items</td>
     * <td>Array</td>
     * <td>The array of items currently visible under this collection</td>
     * </tr>
     * </tbody> </table>
     * 
     * @event
     */
    public static readonly ON_GROUP = "onGroup";

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/


    /**
     * A local filtered copy of this ArrayList's source used to handle local 
     * filters, grouping, sorting, etc.
     */
    public array: T[];

    /**
     * Function used to compare items while attempting to retrieve/update
     * items in this ArrayList.
     * 
     * <p>
     * The default implementation simply compare two items directly as in
     * <code>a == b </code>.
     * </p>
     * 
     * The signature for this function should be:
     * 
     * @type Function
     * 
     * @default
     * 
     * <pre>
     * function(a, b) {
     * 	return a == b;
     * }
     * </pre>
     */
    public compareFunction: Function = function (a: T, b: T) {

        return a == b;
    };

    /**
     * Storage for property <i>query</i>
     */
    protected _query: Query;

    /**
     * The delay in milliseconds before a filtering can be applied to the
     * this collection. This is useful when you're binding multiple filters
     * to the query in the same batch and you want to avoid to process them
     * individually. By adding some delay, we are able to group them
     * together executing all of them at once.
     * 
     * @type int
     * 
     * @default 50
     */
    public filterDelay: number = 50;

    /**
     * The delay in milliseconds before a sorting can be applied to the this
     * collection. This is useful when you're binding multiple filters to
     * the query in the same batch and you want to avoid to process them
     * individually. By adding some delay, we are able to group them
     * together executing all of them at once.
     * 
     * @type int
     * 
     * @default 50
     */
    public sortDelay: number = 50;

    /**
     * The delay in milliseconds before a grouping can be applied to the
     * this collection. This is useful when you're binding multiple filters
     * to the query in the same batch and you want to avoid to process them
     * individually. By adding some delay, we are able to group them
     * together executing all of them at once.
     * 
     * @type int
     * 
     * @default 50
     */
    public groupDelay: number = 50;

    /**
     * Flag indicating if this collection should automatically apply changes
     * bound to the defined query altering its current state. If set to
     * false, query changes are never applied and the collection remain as
     * is.
     * 
     * @type Boolean
     * 
     * @default true
     */
    public synchronizable: boolean = true;

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * CONSTRUCTORS
     * ----------------------------------------------------------*/

    /**
     * Constructor
     * 
     * @param source the source array
     */
    constructor(source: any[] = []) {
        super();

        this.source = source;
    }

    /*----------------------------------------------------------
     * END OF CONSTRUCTORS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/
    // -------------------------------------------------
    // static
    // -------------------------------------------------


    /**
     * Convert the given instance object to an <code>ArrayList</code>
     * instance.
     * 
     * <p>
     * If an <code>Array</code> use it as source for a new
     * <code>ArrayList</code>.
     * </p>
     * 
     * <p>
     * If an <code>ArrayList</code>, <code>null</code> or
     * <code>undefined</code> return it as is.
     * </p>
     * 
     * <p>
     * Anything else, is used as the first element in the source of the
     * returned <code>ArrayList</code>
     * </p>
     * 
     * @param object
     *            the object being converted
     */
    public static toArrayList<T>(object: any): ArrayList<T> {

        if (!Objects.isDefined(object)) {
            return object;
        }

        if (object instanceof ArrayList) {
            return object;
        }

        return new ArrayList(Arrays.toArray(object));
    }

    // -------------------------------------------------
    // private
    // -------------------------------------------------

    /**
     * Simple conversion of a ArrayList/Array to Array
     * 
     * @param elements
     *            {ArrayList|Array} the set of items we want to convert
     * 
     * @return {Array} the given value represented as a plain Array
     */
    private asArray(elements: ArrayOrArrayList<T>): T[] {

        /*
         * convert to array
         */
        if (elements instanceof ArrayList) {

            return elements.source;
        }

        return elements;
    };

    // -------------------------------------------------
    // protected
    // -------------------------------------------------

    /**
     * Dispatch the given kind of change within a given set of items and
     * offset index. This method is called whenever there is a change.
     * 
     * @param kind
     *            {String} the kind of change
     * 
     * @param items
     *            {Array} the array of items
     * 
     * @param index
     *            {int} the offset index
     */
    protected changed(kind: string, items: any[] | null = null, index: number | null = null) {

        var args: any = [kind];

        if (Objects.isDefined(items)) {

            args.push(items);
        }

        if (Objects.isDefined(index)) {

            args.push(index);
        }

        this.dispatch(ArrayList.ON_CHANGE, args);
    }


    // ----------------------------------
    // handlers
    // ----------------------------------

    /**
     * Handler invoked whenever the query suffers a change on one of its filter
     * criteria.
     */
    private queryFilterHandler() {

        /*
         * skip if not suppose to listen to changes for now
         */
        if (!this.synchronizable) {
            return;
        }

        Timer.once(() => this.queryFilterTimerHandler(), this.filterDelay);
    };

    /**
     * Handler invoked after sorting has changed the sorting delay has passed.
     */
    private queryFilterTimerHandler() {

        // always to back to first record when filtering
        this.query.pager.first = 0;

        this.filter(this.query);
    };

    /**
     * Handler invoked whenever the query suffers a change on one of its sorting
     * criteria.
     */
    private querySortHandler() {

        /*
         * skip if not suppose to listen to changes for now
         */
        if (!this.synchronizable) {
            return;
        }

        Timer.once(() => this.querySortTimerHandler(), this.sortDelay);
    };

    /**
     * Handler invoked after sorting has changed the sorting delay has passed.
     */
    private querySortTimerHandler() {

        /*
         * skip if not suppose to listen to changes for now
         */
        if (!this.synchronizable) {
            return;
        }

        this.sort(this.query);
    };

    /**
     * Handler invoked whenever the query suffers a change on one of its
     * grouping criteria.
     */
    private queryGroupHandler() {

        /*
         * skip if not suppose to listen to changes for now
         */
        if (!this.synchronizable) {
            return;
        }

        Timer.once(() => this.queryGroupTimerHandler(), this.groupDelay);
    };

    /**
     * Handler invoked after grouping has changed the grouping delay has passed.
     */
    private queryGroupTimerHandler() {

        /*
         * skip if not suppose to listen to changes for now
         */
        if (!this.synchronizable) {
            return;
        }

        this.group(this.query);
    };

    // -------------------------------------------------
    // public
    // -------------------------------------------------

    // ----------------------------------
    // add
    // ----------------------------------

    /**
     * Add a single element to the end of collection
     * 
     * @param element
     *            {Object} the element being added
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public add(element: T): ArrayList {

        return this.addAll([element]);
    }

    /**
     * Add a single element to this collection within the specified
     * index/position
     * 
     * @param element
     *            {Object} the element being added
     * 
     * @param index
     *            {int} the position we want to add the given element
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public addAt(element: T, index: number): ArrayList {

        return this.addAllAt([element], index);
    }

    /**
     * Add a set of element to the end of collection
     * 
     * @param elements
     *            {Array|ArrayList} the elements being added
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public addAll(elements: ArrayOrArrayList<T>): ArrayList {

        return this.addAllAt(elements, this.source.length);
    }

    /**
     * Add a set of elements to this collection starting within the given
     * offset index as the insertion point
     * 
     * @param elements
     *            {Array|ArrayList} the elements being added
     * 
     * @param index
     *            {int} the index marking the insertion point for the added
     *            elements
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public addAllAt(elements: ArrayOrArrayList<T>, index: number): ArrayList {

        var position = index;

        /*
         * convert to array
         */
        elements = this.asArray(elements);

        for (var i = 0; i < elements.length; i++) {

            var element = elements[i];

            Arrays.addAt(this.source, element, position);

            position++;
        }

        this.changed(ArrayList.ADD, elements, index);

        return this;
    }

    // ----------------------------------
    // move
    // ----------------------------------

    /**
     * Move the given single element to a new position on this collection.
     * 
     * @param element
     *            {Object} the element being moved
     * 
     * @param index
     *            {int} the new index for the moved element
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public move(element: T, index: number): ArrayList {

        return this.moveAll([element], index);
    }

    /**
     * Move the given single element to a new position on this collection.
     * 
     * @param elements
     *            {Array} the elements being moved
     * 
     * @param index
     *            {int} the new index for the moved element
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public moveAll(elements: ArrayOrArrayList<T>, index: number): ArrayList {

        /*
         * convert to array
         */
        elements = this.asArray(elements);

        Arrays.moveAll(this.source, elements, index);

        this.changed(ArrayList.MOVE, elements, index);

        return this;
    }

    /**
     * Move the given single element by its original index position to a new
     * position on this collection.
     * 
     * @param from
     *            {int} the position of the element we want to move
     * 
     * @param to
     *            {int} the new index for the moved element
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public moveAt(from: number, to: number): ArrayList {

        var item = this.get(from);

        Arrays.moveAt(this.source, from, to);

        this.changed(ArrayList.MOVE, [item], to);

        return this;
    }

    // ----------------------------------
    // remove
    // ----------------------------------

    /**
     * Remove the given element from this collection
     * 
     * @param element
     *            {Object} the element being removed
     * 
     * @return {Boolean} true if removed, false otherwise
     */
    public remove(element: T): boolean {

        return this.removeAll([element]).length == 1;
    }

    /**
     * Remove the given set of elements from this collection
     * 
     * @param elements
     *            {Array|ArrayList} the elements being removed
     * 
     * @return {Array} the removed items from this list (not the same
     *         reference of the given array as elements that don't exist in
     *         the collection are simply discarded).
     */
    public removeAll(elements: ArrayOrArrayList<T>): T[] {

        /*
         * convert to array
         */
        elements = this.asArray(elements);

        var items: T[] = [];

        for (var i = 0; i < elements.length; i++) {

            var index = this.indexOf(elements[i]);

            if (index >= 0) {

                /*
                 * include item being removed
                 */
                items.push(this.source[index]);

                /*
                 * remove from source
                 */
                this.source.splice(index, 1);
            }
        }

        /*
         * trigger change
         */
        if (items.length > 0) {

            this.changed(ArrayList.REMOVE, items);
        }

        return items;
    }

    /**
     * Remove an element within the given index position
     * 
     * @param index
     *            {int} the position of the element being removed
     * 
     * @return {Boolean} true if removed, false otherwise
     */
    public removeAt(index: number): boolean {

        return this.removeAllAt([index]).length == 1;
    }

    /**
     * Remove the all elements from this collection mapped against the given
     * set of indices
     * 
     * @param elements
     *            {Array|ArrayList} the indices being removed
     * 
     * @return {Array} the removed items from this list
     */
    public removeAllAt(indices: number[]): T[] {

        /*
         * convert to array
         */
        var items = [];

        for (var i = 0; i < indices.length; i++) {

            var index = indices[i];

            if (index >= 0) {

                /*
                 * include item being removed
                 */
                items.push(this.source[index]);

                /*
                 * remove from source
                 */
                this.source.splice(index, 1);
            }
        }

        /*
         * trigger change
         */
        if (items.length > 0) {

            this.changed(ArrayList.REMOVE, items);
        }

        return items;
    }

    /**
     * Remove all elements in this collection dispatching an
     * {@link #REFRESH} change.
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public clear(): ArrayList {

        this.source.splice(0, this.source.length);

        this.changed(ArrayList.REFRESH);

        return this;
    }

    // ----------------------------------
    // update
    // ----------------------------------

    /**
     * Flag the given element as updated triggering an update change for it.
     * 
     * @param element
     *            {Object} the element that was updated
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public update(element: T): ArrayList {

        return this.updateAll([element]);
    }

    /**
     * Flag the given set element as updated triggering an update change for
     * them.
     * 
     * @param elements
     *            {Array|ArrayList} the elements being updated
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public updateAll(elements: ArrayOrArrayList<T>): ArrayList {

        /*
         * convert to array
         */
        elements = this.asArray(elements);

        var items = [];

        for (var i = 0; i < elements.length; i++) {

            var index = this.indexOf(elements[i]);

            if (index >= 0) {

                this.source[index] = elements[i];

                items.push(elements[i]);
            }
        }

        if (items.length > 0) {
            this.changed(ArrayList.UPDATE, items);
        }

        return this;
    }

    // ----------------------------------
    // replace
    // ----------------------------------

    /**
     * Replace an existing element within a new element under this
     * collection.
     * 
     * @param oldValue
     *            {Object} the original value being replaced
     * 
     * @param newValue
     *            {Object} the new value taking place of the original
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public replace(oldValue: T, newValue: T): ArrayList {

        return this.replaceAll([oldValue], [newValue]);
    }

    /**
     * Replace all the elements on the left by the elements on the right.
     * 
     * @param oldValues
     *            {Array} the original values being replaced
     * 
     * @param newValues
     *            {Array} the new values taking place of the originals
     * 
     * @return {orion.core.ArrayList} this reference
     * 
     * @throws {Error}
     *             if both collections do not have the same length
     */
    public replaceAll(oldValues: ArrayOrArrayList<T>, newValues: ArrayOrArrayList<T>): ArrayList<T> {

        /*
         * convert to array
         */
        oldValues = this.asArray(oldValues);
        newValues = this.asArray(newValues);

        /*
         * validate
         */
        if (oldValues.length !== newValues.length) {

            throw "Values being replaced don't match on size";
        }

        var items = [];

        for (var i = 0; i < oldValues.length; i++) {

            var index = this.indexOf(oldValues[i]);

            if (index >= 0) {

                /*
                 * append chunk of replaced items
                 */
                items.push([oldValues[i], newValues[i]]);

                /*
                 * remove from source
                 */
                this.source[index] = newValues[i];
            }
        }

        /*
         * trigger change
         */
        if (items.length > 0) {

            this.changed(ArrayList.REPLACE, items);
        }

        return this;
    }

    // ----------------------------------
    // find
    // ----------------------------------

    /**
     * Retrieve an Array of indices for the given Array of items
     * 
     * @param value
     *            {Array} the set of items we want the indices from
     * 
     * @return {Array} set of indices in this collection
     */
    public indices(value: ArrayOrArrayList<T>): number[] {

        var result = [];

        var elements: T[] = this.asArray(value);

        for (var i = 0; i < elements.length; i++) {

            var index = this.indexOf(elements[i]);

            if (index >= 0) {
                result.push(index);
            }
        }

        return result;
    }

    /**
     * Retrieve the index for the given item in this ArrayList
     * 
     * @param value
     *            {Object} the item we want the index from
     * 
     * @return {int} the index of the item or -1 if not found
     */
    public indexOf(value: T | null): number {

        for (var i = 0; i < this.array.length; i++) {

            var equal = this.compareFunction.apply(this,
                [this.array[i], value]);

            if (equal) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Verify if the given item is currently present under this ArrayList,
     * returning <code>true</code> if so, and <code>false</code>
     * otherwise.
     * 
     * @param {Object}
     *            item the item to find
     * 
     * @return {Boolean} <code>true</code> if currently present,
     *         <code>false</code> otherwise
     */
    public contains(item: T): boolean {

        return this.indexOf(item) >= 0;
    }

    /**
     * Retrieve an item within the given index
     * 
     * @param index
     *            {int} the index we want the item from
     * 
     * @return {Object} the item within the given index or undefined if not
     *         found
     */
    public get(index: number): T {

        return this.array[index];
    }

    /**
     * Perform a filter against all elements stored in this collection
     * limiting the visibility of the items on this collection to the items
     * that match the defined given search criteria. Note that sorting is
     * also applied to the result collection based on the defined sorting
     * criteria within the given query.
     * 
     * @param query
     *            {orion.query.Query} the query defining the search criteria
     *            we are filtering for
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public filter(query: Query): ArrayList<T> {

        if (this.query != query || this.synchronizable) {

            if (query) {

                this.array = this.find(query);

            } else {

                this.array = this.source;
            }
        }

        this.dispatch(ArrayList.ON_FILTER, [query, this.array]);

        return this;
    }

    /**
     * Perform a sort against currently filtered elements under this this
     * collection moving their position according to the new defined order
     * by the given query's sorting criteria. Note that any filters in the
     * given query will not be applied.
     * 
     * @param query
     *            {orion.query.Query} the query defining the search criteria
     *            we are sorting by
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public sort(query: Query): ArrayList<T> {

        if (this.query != query || this.synchronizable) {

            if (!Arrays.isEmpty(query.sorts)) {

                this.array = Objects.copy(this.array) as T[];

                Arrays.sort(this.array, query.sorts);

            } else {

                /*
                 * restore from original source
                 */
                this.array = this.find(query);
            }
        }

        this.dispatch(ArrayList.ON_SORT, [query, this.array]);

        return this;
    }

    /**
     * Perform a group against currently filtered elements under this this
     * collection limiting the visibility only for those that match the
     * grouping criteria. Note that any filters in the given query will not
     * be applied.
     * 
     * @param query
     *            {orion.query.Query} the query defining the search criteria
     *            we are sorting by
     * 
     * @return {orion.core.ArrayList} this reference
     */
    public group(query: Query): ArrayList<T> {

        if (!Arrays.isEmpty(query.groups)) {

            this.array = Objects.copy(this.array) as T[];

            // TODO: implement group
            //Arrays.group(this.mirror, query.getGroups());

        } else {

            /*
             * restore from original source
             */
            this.array = this.find(query);
        }

        this.dispatch(ArrayList.ON_GROUP, [query, this.array]);

        return this;
    }

    /**
     * Perform a filter against all elements stored in this collection
     * returning a new array holding only the elements that do match the
     * defined the given search criteria
     * 
     * @param query
     *            {orion.query.Query} the query defining the search criteria
     *            we are filtering for
     * 
     * @return {Array} containing the filtered values
     */
    public find(query: Query): T[] {

        return Arrays.find(this.source, query);
    }

    // ----------------------------------
    // utilities
    // ----------------------------------

    /**
     * Copy all items in this collection and all configuration properties
     * into a new ArrayList. Does not clone the objects stored in the
     * collection but just copy them.
     * 
     * <p>
     * The returned list contains all untouched elements in this collection
     * but in a different ArrayList instance.
     * </p>
     * 
     * @returns {orion.core.ArrayList} copied instance
     */
    public copy(): ArrayList<T> {

        var clone = this.toArray();
        var constructor: any = this.constructor;

        return new constructor(clone);
    }

    /**
     * Deep clone this collection and all configuration properties into a
     * new ArrayList. Does not clone the objects stored in the collection
     * but just copy them.
     * 
     * <p>
     * Note that the returned collection contains deep-cloned objects
     * </p>
     * 
     * @returns {orion.core.ArrayList} cloned instance
     */
    public clone(): ArrayList<T> {

        var clone = Objects.clone(this.source);
        var constructor: any = this.constructor;

        return new constructor(clone);
    }

    /**
     * Transform the content of this collection into a new unlinked Array.
     * Note that internal elements are untouched
     * 
     * @return {Array} copy of this collection as an Array
     */
    public toArray(): T[] {

        return this.array.slice(0);
    }

    /**
     * Method used to convert the content of this collection to JSON object
     * 
     * @return {Array} content of this collection ready to JSON conversion
     */
    public toJSON(): T[] {

        return this.array.slice(0);
    }

    /**
     * Map a new array within all the elements currently visible in this
     * collection. The given callback is called for every element being
     * iterated and a new array is returned with the mapped values returned
     * by each processed element within the given callback.
     * 
     * @param callback
     *            {Function} the function called for every element
     * 
      * @param thisArg
     *            {any} An object to which the this keyword can refer in the 
     *            callbackfn function. If thisArg is omitted, undefined 
     *            is used as the this value.
     * 
     * @return {Array} independent array with mapped values processed by the
     *         given callback
     */
    public map<U>(callback: ((value: T, index: number, array: T[]) => U), thisArg?: any): U[] {

        return this.array.map(callback, thisArg);
    }

    /**
     * Enables source navigation by visiting every element in this
     * collection using a callback function as a way of looping through all
     * its elements.
     * 
     * @param callback
     *            function called for every element in this collection. The
     *            callback uses the signature
     *            <code>function(index, value)</code>.
     * 
     * @returns {orion.core.ArrayList} this reference
     */
    public each(callback: (index: number, item: T) => void): ArrayList<T> {

        Objects.each(this.array, callback);

        return this;
    }

    // ----------------------------------
    // Iterator & Iterable
    // ----------------------------------

    public *iterator() {

        for (let value of this.array) {

            yield value;
        }
    }

    /**
     * Transform this class into for loop iterable class.
     */
    public [Symbol.iterator]() {
        return this.iterator();
    }

    // -------------------------------------------------
    // GETS AND SETS
    // -------------------------------------------------

    // ----------------------------------
    // length
    // ----------------------------------

    /**
     * Count the number if items under this collection. Not that any applied
     * filters will directly impact on the result of this function.
     * 
     * @return {Number} current length
     */
    public get length() {

        return this.array.length;
    }

    // ----------------------------------
    // empty
    // ----------------------------------

    /**
     * Check if this collection currently has 0 items
     * 
     * @return {Boolean} true if no items reside in this collection, false
     *         otherwise
     */
    public get empty() {

        return this.length === 0;
    }

    // ----------------------------------
    // source
    // ----------------------------------

    /**
     * The source array being managed by this ArrayList. This property
     * contains the raw values being managed by this collection. Any changes
     * directly made to this array will not be propagated through the
     * regular change dispatcher under this collection, so handle with care!
     * 
     * @type Array
     * 
     * @default []
     */
    protected _source: T[];

    /**
     * Retrieve the underlying source array
     * 
     * @return source array
     */
    public get source(): T[] {
        return this._source;
    }

    /**
     * Setter the existing source Array on this collection.
     * 
     * <p>
     * Causes the event <code>REFRESH</code> to be dispatched forcing
     * attached components to completely refresh its content.
     * </p>
     * 
     * @param value
     *            {Array} the new source
     */
    public set source(value: T[]) {

        this._source = this.asArray(value);

        if (this.synchronizable && this.query) {

            this.array = this.find(this.query);

        } else {

            this.array = this.source;
        }

        this.changed(ArrayList.REFRESH, value);
    }

    // ----------------------------------
    // query
    // ----------------------------------

    /**
     * The query bound to this collection used to filter its internal
     * content.
     * 
     * @return {Query} query instance
     */
    public get query(): Query {
        return this._query;
    }

    /**
     * Setter the existing source Query on this collection.
     * 
     * <p>
     * Causes the event <code>ON_FILTER</code> to be dispatched forcing
     * attached components to be filtered.
     * </p>
     * 
     * @param value
     *            {Array} the new source
     */
    public set query(value: Query) {

        if (this.query) {

            this.query.unbind(Query.ON_FILTER, this.queryFilterHandler);
            this.query.unbind(Query.ON_SORT, this.querySortHandler);
            this.query.unbind(Query.ON_GROUP, this.queryGroupHandler);
        }

        this._query = value;

        if (this.query) {

            this.query.bind(Query.ON_FILTER, this.queryFilterHandler, this);
            this.query.bind(Query.ON_SORT, this.querySortHandler, this);
            this.query.bind(Query.ON_GROUP, this.queryGroupHandler, this);
        }

        this.filter(value);
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}

/**
 * Type taht encapsulaets an Array|ArrayList instance
 * 
 * @author orionframework
 */
export type ArrayOrArrayList<T extends Object=Object> = T[] | ArrayList<T>;