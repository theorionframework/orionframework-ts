import { EventDispatcher } from "./EventDispatcher";
import { Arrays } from "../utils/Arrays";
import { Objects } from "../utils/Objects";
import { Reflection } from "../utils/Reflection";
/**
 * Component responsible for encapsulating a Map or a key-based storage that can
 * refer to memory reference on keys rather than just simple String/primitive
 * type keys.
 * 
 * <p>
 * The keys and values stored under this map are indexed via memory reference
 * which means you may have complex object mapping where in a regular hash is
 * now allowed due the conversion of the item's key to String while storing.
 * </p>
 * 
 * @author orionframework
 * 
 * 
 */
export class Map<KEY=Object, VALUE=Object> extends EventDispatcher {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /**
     * Event dispatched whenever the content of this map changes.
     */
    public static readonly ON_CHANGE = "onChange";

    /**
     * Indicates that the map added one or multiple items.
     */
    public static readonly ADD = "add";

    /**
     * Indicates that the collection removed an item or items.
     */
    public static readonly REMOVE: "remove";

    /**
     * Indicates that the item at the position identified by the
     * CollectionEvent location property has been replaced.
     */
    public static readonly REPLACE: "replace";

    /**
     * Indicates that one or more items were updated within the collection.
     */
    public static readonly UPDATE = "update";

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * CONSTRUCTORS
     *----------------------------------------------------------*/

    /**
     * Constructor
     * 
     * @private
     */
    public constructor(hash: Map | Object | any[][] | null = null) {

        super();

        if (hash) {

            this.putAll(hash);
        }
    }

    /*----------------------------------------------------------
     * END OF CONSTRUCTORS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    // ----------------------------------
    // handlers
    // ----------------------------------

    // ----------------------------------
    // private
    // ----------------------------------

    protected changed(kind: string, keys: Array<KEY>, values: Array<VALUE> | null = null) {

        this.dispatch(Map.ON_CHANGE, [kind, keys, values]);
    };

    // ----------------------------------
    // public
    // ----------------------------------

    /**
     * Check rather the given key is currently stored under this map or not.
     * 
     * @param key
     *            {Object} the key being verified
     * 
     * @return {Boolean} true if exists within other stored keys or false
     *         otherwise
     */
    public containsKey(key: KEY): boolean {

        return this.keys.indexOf(key) >= 0;
    }

    /**
     * Check rather the given value is currently stored under this map or
     * not.
     * 
     * @param value
     *            {Object} the value being verified
     * 
     * @return {Boolean} true if exists within other stored values or false
     *         otherwise
     */
    public containsValue(value: VALUE): boolean {

        return this.values.indexOf(value) >= 0;
    }

    /**
     * Check on the index for the item stored under the given key
     * 
     * @param key
     *            {Object} the item's key
     * 
     * @return {int} item's index or -1 if not found
     */
    public indexOf(key: KEY): number {

        return this.keys.indexOf(key);
    }

    /**
     * Retrieve an item stored under the given key
     * 
     * @param key
     *            {Object} the item's key
     * 
     * @return {Object} the stored value if found or null otherwise
     */
    public get(key: KEY): VALUE | null {

        var index = this.indexOf(key);

        if (index >= 0) {

            return this.values[index];
        }

        return null;
    }

    /**
     * Retrieve the key for the given value. Notice that if the given value
     * is stored under multiple keys, the first one is returned.
     * 
     * @param value
     *            {Object} the value stored under this map
     * 
     * @return {Object} the key of the given object if currently stored or
     *         null otherwise
     */
    public getKey(value: VALUE): KEY | null {

        var index = this.values.indexOf(value);

        if (index >= 0) {

            return this.keys[index];
        }

        return null;
    }

    /**
     * Retrieve the stored value within the given index
     * 
     * @param index
     *            {int} the item's index we want
     * 
     * @return {Object} the item under the given index if found or null
     *         otherwise
     */
    public getAt(pos: number): VALUE | null {

        return pos >= 0 && pos < this.size() ? this.values[pos] : null;
    }

    /**
     * Replace or create a new entry under this map to store the given key
     * and values.
     * 
     * @param key
     *            {Object} the item's key used for later retrieval
     * 
     * @param value
     *            {Object} the value being stored
     */

    public put(key: KEY, value: VALUE, notify: boolean = true): boolean {

        var index = this.indexOf(key);

        if (index >= 0) {

            this.values[index] = value;

            if (notify) {

                this.changed(Map.REPLACE, [key], [value]);
            }

            return false;

        } else {

            this.keys.push(key);
            this.values.push(value);

            if (notify) {
                this.changed(Map.ADD, [key], [value]);
            }

            return true;
        }
    };

    /**
     * Remove the item under the given key
     * 
     * @param {Object}
     *            key the key of the item being removed
     * 
     * @return {Object} item being removed (or null if not found)
     */
    public remove(key: KEY, notify: boolean = true) {

        var index = this.indexOf(key);

        if (index >= 0) {

            var value: any = this.getAt(index);

            Arrays.removeAt(this.keys, index);
            Arrays.removeAt(this.values, index);

            if (notify) {

                this.changed(Map.REMOVE, [key], [value]);
            }

            return value;
        }

        return null;
    }

    /**
     * Remove all elements of the given map off of this map. Ignore items
     * that don't exist in this map yet.
     * 
     * @param map
     *            {Map|Object} items to be removed
     */
    public removeAll(map: Object | Map) {

        var keys: KEY[] = [];
        var values: VALUE[] = [];

        if (map instanceof Map) {

            Objects.each(map.keys, (i: number, key: KEY) => {

                var value = this.remove(key);

                if (Objects.isDefined(value)) {

                    keys.push(key);
                    values.push(value);
                }
            });

        } else {

            Objects.each(map, (key: any) => {

                var value = this.remove(key);

                if (Objects.isDefined(value)) {

                    keys.push(key);
                    values.push(value);
                }
            });
        }

        if (keys.length > 0) {

            this.changed(Map.REMOVE, keys, values);
        }
    }

    /**
     * Put the entire Map (or Hash) into this map replacing keys that
     * already exists or creating new ones for those that don't exist yet
     * 
     * @param map
     *            {Map|Object} the map being added
     */
    public putAll(map: Object | Map | any[][]) {

        var added: any[] = [];
        var replaced: any[] = [];

        if (map instanceof Map) {

            Objects.each(map.keys, (i: number, key: KEY) => {

                var value = map.getAt(i);

                if (this.put(key, value as VALUE)) {

                    added.push(key);

                } else {

                    replaced.push(key);
                }
            });

        } else if (Reflection.isArray(map)) {

            Objects.each(map, (i: number, values: any[]) => {

                var key = values[0];
                var value = values[1];

                if (this.put(key, value)) {

                    added.push(key);

                } else {

                    replaced.push(key);
                }
            });

        } else {

            Objects.each(map, (key: any, value: VALUE) => {

                if (this.put(key, value)) {

                    added.push(key);

                } else {

                    replaced.push(key);
                }
            });
        }

        if (added.length > 0) {

            this.changed(Map.ADD, added);
        }

        if (replaced.length > 0) {

            this.changed(Map.REPLACE, replaced);
        }
    }

    /**
     * Return the current number of items under this map
     * 
     * @return {Number} number of stored items
     */
    public size(): number {

        return this.keys.length;
    }

    /**
     * Returns <tt>true</tt> if this map contains no key-value mappings.
     * 
     * @return {Boolean} <tt>true</tt> if this map contains no key-value
     *         mappings.
     */
    public isEmpty(): boolean {
        return this.size() === 0
    }

    /**
     * Iterate through all the items of this map calling the given callback
     * function with parameters for both key and value being iterated.
     * 
     * @param each
     *            {Function} the callback function called for each iterated
     *            item
     * 
     * @return {orion.core.Map} itself for convenience
     */
    public each(each: Function) {

        Objects.each(this.keys, (i: number, key: KEY) => {

            var value = this.getAt(i);

            return each.call(this, key, value);
        });

        return this;
    }

    /**
     * Transform the content of this Map into a plain Object. Note that if
     * you're map contains complex key types the same will stored under the
     * representation of the item's string;
     * 
     * @return {Object} map converted to plain object
     */
    public toObject(): any {

        var object: any = {};

        this.each((key: KEY, value: VALUE) => {

            var id = Objects.isDefined(key) ? key.toString() : "null";

            object[id] = value;
        });

        return object;
    }

    // -------------------------------------------------
    // GETS AND SETS
    // -------------------------------------------------

    // ----------------------------------
    // keys
    // ----------------------------------

    /**
     * Internal storage for the currently stored key items. This always be
     * paired up with {@link #values};
     */
    protected _keys: Array<KEY> = [];

    /**
     * The array with all keys currently stored on this Map. This array
     * should not be manually manipulated as it can cause irreversible
     * problems due to the need of pairing against stored values. Prefer the
     * available API methods instead.
     * 
     * @return {Array} currently stored keys
     */
    public get keys(): Array<KEY> {

        return this._keys;
    }

    // ----------------------------------
    // values
    // ----------------------------------

    /**
     * Internal storage for the currently stored value items. This always be
     * paired up with {@link #keys};
     */
    protected _values: Array<VALUE> = [];

    /**
     * The array with all values currently stored on this Map. This array
     * should not be manually manipulated as it can cause irreversible
     * problems due to the need of pairing against stored keys. Prefer the
     * available API methods instead.
     * 
     * @return {Array} currently stored values
     */
    public get values(): Array<VALUE> {

        return this._values;
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}