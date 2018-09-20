import { Objects } from "./Objects";
import { Reflection } from "./Reflection";
import { E4J } from "./E4J";
import { QuerySort } from "../query/QuerySort";

/**
 * Array utility class
 * 
 * @author orionframework
 * 
 * 
 * 
 * @class
 * @name orion.utils.Arrays
 */
export class Arrays {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    // ----------------------------------
    // constants
    // ----------------------------------

    /**
     * An empty array
     */
    public static EMPTY = [];

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

	/**
	 * Split a collection into a set of collections with the given length.
	 *
	 * @param <T>
	 * @param values
	 *            the collection to be split
	 * @param length
	 *            the maximum number of records per sub-collection
	 * @return split collection
	 */
    public static split<T>(values: T[], length: number): T[][] {

        let result: T[][] = [];

        let size = Math.ceil(values.length / length);

        for (let i = 0; i < size; i++) {

            let start = i * length;
            let end = Math.min(values.length, (start + length));

            let subValues: T[] = [];

            for (let j = start; j < end; j++) {

                subValues.push(values[j]);
            }

            result.push(subValues);
        }

        return result;
    }

    /**
     * Create a copy of the given array copying from the given start and end index.
     * This means that calling this method with the given arguments:
     * <code>subArray([0, 1, 2, 3, 4, 5], 2, 4)</code> you will end-up with the
     * given result: <code>[2,3]</code>.
     * 
     * @param array
     *            the array being copied
     * 
     * @param start
     *            the starting index
     * 
     * @param end
     *            the end index (if not given, assumes the array's length).
     * 
     * @return sub-array containing the given range
     * 
     * @member Arrays
     */
    public static subArray(array: any[], start: number, end: number | undefined = undefined): any[] {

        end = typeof end == "undefined" ? array.length : Math.min(end, array.length);

        var result = [];

        for (var i = start; i < end; i++) {

            result.push(array[i]);
        }

        return result;
    };

    /**
     * Copy the entire given array into a new one and return it.
     * 
     * @param array
     *            {Array} the array being copied
     * 
     * @return {Array} the copied array instance.
     */
    public static copy(array: any[]): any[] {

        return array.slice(0);
    }

    /**
     * Create a range between two numbers (including both) and return it as an
     * array.
     * 
     * @param from
     *            {Number} the initial number
     * 
     * @param to
     *            {Number} the final number
     * 
     * @param callback
     *            {Function} function invoked for each item in the range so the
     *            result returned can be formatted instead of simply used as is.
     * 
     * @return {Array} the generated range
     */
    public static range(from: number, to: number, callback: Function | null = null): number[] {

        var result = [];

        for (var i = from; i <= to; i++) {

            var item = callback ? callback.call(Arrays, i) : i;

            result.push(item);
        }

        return result;
    };

    /**
     * Validate the given value against an <code>Array</code> instance. If so,
     * return as is, otherwise, wrap its content as an array.
     * 
     * @param value
     *            the value being converted
     * 
     * @return value as an array
     */
    public static toArray(value: any[] | any): any[] {

        if (Reflection.isArray(value)) {

            return value;
        }

        return [value];
    };

    /**
     * Check rather the given array contains the given value
     * 
     * @param array
     *            the array being verified
     * 
     * @param value
     *            the value being checked
     * 
     * @param caseSensitive
     *            {Boolean} flag indicating if case-sensitive comparison should be
     *            applied. (Defaults to true)
     * 
     * @return {Boolean} true if present, false otherwise
     */
    public static contains(array: any[], value: any, caseSensitive = true): boolean {

        if (caseSensitive === false) {

            for (var i = 0, length = array.length; i < length; i++) {

                if (Objects.equal(array[i], value, caseSensitive)) {

                    return true;
                }
            }

            return false;
        }

        return array.indexOf(value) >= 0;
    };

    /**
     * Check if the given Array contains all the items within second array
     * 
     * @param list
     *            {Array} the list being verified
     * 
     * @param items
     *            {Array} the items that should exists within the first list
     * 
     * @param caseSensitive
     *            {Boolean} flag indicating if case-sensitive comparison should be
     *            applied. (Defaults to true)
     */
    public static containsAll(array: any[], values: any[], caseSensitive = true): boolean {

        for (var i = 0, length = values.length; i < length; i++) {

            if (Arrays.contains(array, values[i], caseSensitive)) {

                return false;
            }
        }

        return true;
    };

    /**
     * Filter the content of the given array into a second array without any
     * duplicate values.
     * 
     * <p>
     * When dealing with complex hash types, a field can be provided so that a field
     * shall be evaluated for uniqueness instead of the value itself.
     * </p>
     * 
     * @param {Array}
     *            array the array being filtered/transformed
     * 
     * @param {String}
     *            field the field name (may be in E4J format, for more, see
     *            {@link #orion.utils.E4J})
     * 
     * @return {Array} filtered array
     * 
     */
    public static unique(array: any[], field?: string): any[] {

        var result: any[] = [];
        var keys: any[] = [];

        Objects.each(array, (i: number, value: any) => {

            var key = value;

            if (field) {

                key = E4J.read(value, field);
            }

            if (!Arrays.contains(keys, key)) {

                result.push(value);

                keys.push(key);
            }
        });

        return result;
    };

    /**
     * Retrieve the last item in this array
     * 
     * @param {Array}
     *            the array we are retrieving the last item from
     * 
     * @return {Object} the last item of the given array
     */
    public static last(array: any[]): any {

        return array[array.length - 1];
    };

    /**
     * Remove the given item from the given array
     * 
     * @param array
     *            the array being manipulated
     * 
     * @param value
     *            the value being removed
     */
    public static remove(array: any[], value: any) {

        Arrays.removeAt(array, array.indexOf(value));
    };

    /**
     * Remove an item represented by the given <code>index</code>
     * 
     * @param array
     *            the array being manipulated
     * 
     * @param index
     *            the index representing the element being removed
     */
    public static removeAt(array: any[], index: number) {

        array.splice(index, 1);
    };

    /**
     * Add all given elements into the given array
     * 
     * @param array
     *            {Array} the array we are adding to
     * 
     * @param values
     *            {Array} the values being added
     */
    public static addAll(array: any[], values: any[]) {

        for (var i = 0; i < values.length; i++) {

            array.push(values[i]);
        }
    };

    /**
     * Remove all elements from the given array that are present in the second
     * array. However, if a second array is not informed, then the first array is
     * cleared.
     * 
     * @param array
     *            {Array} the array being cleared
     */
    public static clear(array: any[]) {

        array.splice(0, array.length);
    };

    /**
     * Remove all elements from the given array that are present in the second
     * array.
     * 
     * @param array
     *            {Array} the array being
     * 
     * @param values
     *            {Array}
     */
    public static removeAll(array: any[], values: any[]): any[] {

        for (var i = 0; i < values.length; i++) {

            var index = array.indexOf(values[i]);

            if (index >= 0) {

                Arrays.removeAt(array, index);
            }
        }

        return array;
    };

    /**
     * Add an item to the given array within the given position
     * 
     * @param array
     *            the array being manipulated
     * 
     * @param item
     *            the item being added
     * 
     * @param index
     *            the position of the item being added
     */
    public static addAt(array: any[], item: any, index: number) {

        array.splice(index, 0, item);
    };

    /**
     * Move an item from one index position to another index position
     * 
     * @param array
     *            the array being manipulated
     * 
     * @param from
     *            the current index position
     * 
     * @param to
     *            the new index position
     */
    public static moveAt(array: any[], from: number, to: number) {

        var item = array[from];

        Arrays.removeAt(array, from);
        Arrays.addAt(array, item, to);
    };

    /**
     * Move the given single element to a new position on this collection. *
     * 
     * @param elements
     *            {Array} the elements being moved
     * 
     * @param index
     *            {int} the new index for the moved element
     * 
     * @return {Array} the updated array with the moved items
     */
    public static moveAll(array: any[], values: any[], index: number): any[] {

        var position = index;

        Objects.each(values, function (i: number, value: any) {

            Arrays.remove(array, value);
        });

        Objects.each(values, function (i: number, value: any) {

            Arrays.addAt(array, value, position);

            position++;
        });

        return array;
    };

    /**
     * Check if the given array is null, undefined or empty.
     * 
     * @param value
     *            the array being checked
     * 
     * @return <code>true</code> if currently empty, <code>false</code>
     *         otherwise.
     */
    public static isEmpty(value: any[]): boolean {

        return !value || value.length <= 0;
    };

    /**
     * Safe Array's length retrieval with fall back to 0 if not defined/null.
     * 
     * @param value
     *            the array being checked
     * 
     * @return {Number} array's length
     */
    public static getLength(value: any[]): number {

        return value && value.length ? value.length : 0;
    };

    /**
     * Compares if the given value is the last item of the given array
     * 
     * @param array
     *            {Array} the array used being compared
     * 
     * @param value
     *            {Object} the value being compared
     * 
     * @return {Boolean} true if so, false otherwise
     */
    public static isLast(array: any[], value: any): boolean {

        return (array.length > 0) && (array[array.length - 1] === value);
    };

    /**
     * Convert the given array of objects into an Object. This object will contain
     * the same common properties from the objects in the given list. Each value
     * will contain instead a array from each object of the given list.
     * 
     * <pre>
     * [ {
     * 	key : 1
     * }, {
     * 	key : 2
     * } ]
     * </pre>
     * 
     * would be converted into:
     * 
     * <pre>
     * {
     * 	key : [ 1, 2 ]
     * }
     * </pre>
     * 
     * This method is useful for converting a list of objects to a compatible
     * multi-value object used to submit to a remote server via AJAX (similar to
     * multi-value field forms).
     * 
     * @param items
     *            the list of objects to be converted
     * 
     * @return object containing all properties as array
     */
    public static toMultiValueObject(items: any[]): any {

        var result: any = {};

        Objects.each(items[0], function (name: string) {

            result[name] = [];

            for (var i = 0; i < items.length; i++) {

                result[name].push(items[i][name]);
            }
        });

        return result;
    };

    /**
     * Convert an array of hash objects to an array of properties. We extract the
     * property name from each hash object in the given array returning them as part
     * of a new array on the same order of the original one.
     * 
     * I.E.:
     * 
     * <pre>
     * var array = [{name : &quot;John&quot;},{ name : &quot;Mary&quot;
     * var result = arrayToPropertyArray(array, &quot;name&quot;);
     * 
     * Where result should be: [&quot;John&quot;, &quot;Mary&quot;]
     * </pre>
     * 
     * @param array
     *            of hash objects
     * 
     * @param property
     *            the property name
     * 
     * @return array of properties from each hash object in the given array
     */
    public static toPropertyArray(array: any[], property: string): any[] {

        var result = [];

        for (var i = 0; i < array.length; i++) {

            var hash = array[i];

            result.push(hash[property]);
        }

        return result;
    };

    /**
     * Sort the given array by the given property in the given direction.
     * 
     * @param array
     *            {Array} the array we want to sort
     * 
     * @param sorts
     *            {Array} the list of hash objects for the sorted fields. Each
     *            object may contain
     *            <code>{ field : "name", order : "asc|desc", valueFunction : ...}</code>
     *            where.
     *            <ul>
     *            <li><b>property - {String or Function}</b>: the property name we
     *            are sorting by. When not defined, use the value directly defined
     *            in the array. You're also allowed to pass a function that accepts
     *            one parameter and returns the value used to sort by. I.E.:
     *            function(a){ return a.state.country.name } enabling you to
     *            navigate through multiple objects.</li>
     *            <li><b>asc - {String}</b> : the order in which sorting should
     *            happen.</li>
     *            <li><b>valueFunction - {Function}</b> : The function used to
     *            extra items being sorted.</li>
     *            </ul>
     * 
     * @param parser
     *            {Function} function used to parse the extracted value before we
     *            can run the comparison
     * 
     * @return {Array} sorted array (same instance of the given one)
     */
    public static sort(array: any[], sorts: QuerySort[], parser: any = null): any[] {

        var sortFunction = function (a: any, b: any) {

            var comparison = -1;

            for (var i = 0; i < sorts.length; i++) {

                var sort = sorts[i];

                var asc = sort.order == "asc";

                var propA = asc ? a : b;
                var propB = asc ? b : a;

                /*
                 * extract property from the compared object
                 */
                if (sort.field) {

                    if (typeof sort.field == "string") {

                        propA = E4J.read(propA, sort.field);
                        propB = E4J.read(propB, sort.field);

                    } else if (Reflection.isFunction(sort.field)) {

                        propA = sort.field(propA);
                        propB = sort.field(propB);
                    }
                }

                /*
                 * parse to proper type before comparing
                 */
                if (Reflection.isFunction(parser)) {

                    propA = parser(propA, sort);
                    propB = parser(propB, sort);
                }

                comparison = Objects.compare(propA, propB);

                if (comparison !== 0) {

                    return comparison;
                }
            }

            return comparison;
        };

        array.sort(sortFunction);

        return array;
    };

    // ----------------------------------
    // arithmetics
    // ----------------------------------

    /**
     * Concatenate all the given arrays into a new single Array. Arguments that are
     * not arrays are just appended as is.
     * 
     * @param arguments
     *            0...x
     * 
     * @return {Array} array containing all subtracted sub-entries.
     */
    public static sum() {

        var result = Arrays.copy(arguments[0]);

        for (var i = 1; i < arguments.length; i++) {

            var arg = arguments[i];

            if (Reflection.isArray(arg)) {

                Arrays.addAll(result, arg);

            } else {

                result.push(arg);
            }
        }

        return result;
    };

    /**
     * Subtract all sequence values from the first array passed as an argument and
     * returned it as a new array.
     * 
     * @param arguments
     *            0...x
     * 
     * @return {Array} array containing all added sub-entries.
     */
    public static substract() {

        var result = Arrays.copy(arguments[0]);

        for (var i = 1; i < arguments.length; i++) {

            // fast skip if reaching the end of the origin
            if (result.length == 0) {
                break;
            }

            var arg = arguments[i];

            if (Reflection.isArray(arg)) {

                Arrays.removeAll(result, arg);

            } else {

                var index = result.indexOf(arg);

                if (index >= 0) {

                    Arrays.removeAt(result, index);
                }
            }
        }

        return result;
    };

    // ----------------------------------
    // query
    // ----------------------------------

    /**
     * Filter the given array so that it only returns items matching the given query parameters. 
     * Note that only filters are included in the comparison
     * 
     * @param source the source array being filtered
     * 
     * @param query the query containing the constraints for filtering
     * 
     * @return filtered array
     */
    public static filter<T>(source: T[], query: any): T[] {

        let result: T[] = [];

        Objects.each(source, (i: number, element: any) => {

            if (query.match) {

                if (query.match(element)) {

                    result.push(element);
                }
            }
            else if (Objects.match(element, query)) {

                result.push(element);
            }
        });

        return result;

    }

    /**
     * Group the items of the given array into unique result per field name.
     * 
     * @param source the source array being filtered
     * 
     * @param fields the list of fields we want to group by
     * 
     * @return grouped array
     */
    public static group<T>(source: T[], fields: string[]): T[] {

        let result = Arrays.copy(source);

        for (let field of fields) {

            result = Arrays.unique(result, field);
        }

        return result;
    }

    /**
     * Filter the given array so that it only returns items matching the given query parameters. 
     * Note that only filters are included in the comparison
     * 
     * @param source the source array being filtered
     * 
     * @param query the query containing the constraints for filtering
     * 
     * @return filtered array
     */
    public static find<T>(source: T[], query: any): T[] {

        let result: T[];

        if (!Arrays.isEmpty(query.filters)) {

            result = Arrays.filter(source, query);
        }
        else {

            result = Arrays.copy(source);
        }

        if (!Arrays.isEmpty(query.groups)) {

            result = Arrays.group(result, query.groups);
        }

        if (!Arrays.isEmpty(query.sorts)) {

            Arrays.sort(result, query.sorts);
        }

        return result;


    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}