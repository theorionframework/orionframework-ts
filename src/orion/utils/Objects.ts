import { Reflection } from "./Reflection";
import { Arrays } from "./Arrays";
import { Numbers } from "./Numbers";

/**
 * Object utility class
 * 
 * @author orionframework
 * 
 * @ 1.0
 * 
 * @class
 * @name orion.utils.Objects
 */
export class Objects {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    // ----------------------------------
    // constants
    // ----------------------------------

    /**
     * An empty object
     */
    public static EMPTY = {};

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/



    /**
     * Perform a deep clone of the given Object, be it a single-value based type
     * such as String, Number, int, Date or be it a complex Hash object or Array or
     * even mixed returning a completely independent object as a result.
     * 
     * <p>
     * For simple Hash object copy, use #extend(target, source...) instead.
     * </p>
     * 
     * @param object
     *            the object being cloned
     * 
     * @return deep cloned object completely independent from its source
     * 
     * @member Objects
     */
    public static clone(object: any): any {

        /*
         * null, undefined, empty string don't need cloning
         */
        if (!object) {

            return object;
        }

        var result = object;

        if (Reflection.isArray(object)) {

            result = [];

            for (var i = 0; i < object.length; i++) {

                result.push(Objects.clone(object[i]));
            }

            return result;
        }

        if (object instanceof Date) {

            return object;
        }

        if (Reflection.isObject(object)) {

            result = {};

            for (var name in object) {

                if (object.hasOwnProperty(name)) {

                    result[name] = Objects.clone(object[name]);
                }
            }

            return result;
        }

        return result;
    };

    /**
     * Copy all properties of the given object to a new object
     * 
     * @param data
     *            the object to be copied
     * 
     * @return copied object
     * 
     * @function
     */
    public static copy(data: any[] | Object): any[] | Object {

        if (Reflection.isArray(data)) {

            return Arrays.copy(data as any[]);
        }

        return Objects.extend({}, data);
    };

    /**
     * Check rather the given object contains at least one property
     * 
     * @param object
     *            {Object} the object being mapped
     * 
     * @return {Boolean} <code>true</code> if no properties are defined in the
     *         given object, <code>false</code> otherwise
     */
    public static isEmpty(object: any): boolean {

        if (object) {

            for (var name in object) {

                if (name) {
                    return false;
                }
            }
        }

        return true;
    };

    /**
     * Remove all blank, null or NaN properties from the given object
     * 
     * @param data
     *            the object to be cleaned
     */
    public static clean(data: any) {

        Objects.each(data, function (name: string, value: any) {

            if (value === '' || !Objects.isDefined(value)
                || (typeof value === "number" && isNaN(value))) {

                delete data[name];
            }
        });
    };

    public static toString = (function () {

        var objectToString = function (value: any, converted: any) {

            converted.push(value);

            var str: any[] = [];

            Objects.each(value, function (key: string, item: any) {

                str.push(key + "=" + toString(item, converted));
            });

            return "{" + str.join(", ") + "}";
        };

        var arrayToString = function (value: any[], converted: any) {

            converted.push(value);

            var str: any[] = [];

            Objects.each(value, function (key: number, item: any) {

                str.push(toString(item, converted));
            });

            return "[" + str.join(", ") + "]";
        };

        var toString = function (value: any, converted: any) {

            if (Reflection.isObject(value)) {

                if (converted && Arrays.contains(converted, value)) {
                    return "{...}";
                }

                return objectToString(value, converted || []);
            }

            if (Reflection.isArray(value)) {

                if (converted && Arrays.contains(converted, value)) {
                    return "[...]";
                }

                return arrayToString(value, converted || []);
            }

            if (Objects.isDefined(value)) {

                return value.toString();
            }

            return "";
        };

        return toString;
    })();

    /**
     * Low-level API for copying all properties defined within the given hash
     * objects into the given target hash object.
     * 
     * <p>
     * The target object will receive the properties from each defined hash argument
     * given in its sequential order. This means that if 2 objects are given, and
     * they both contain the same property with different value, only the last
     * object's property will be kept overriding all previously extended ones.
     * </p>
     * 
     * @param deep
     *            {Boolean} If true, the merge becomes recursive (AKA. deep copy).
     * 
     * @param skipInvalid
     *            {Boolean} Flag that indicates if we should skip undefined/invalid
     *            properties. Default is <code>true</code>
     * 
     * @param deepArray
     *            {Boolean} deep copy array items as well. Default is
     *            <code>true</code>
     * 
     * @param target
     *            the object receiving the copied properties
     * 
     * @param args
     *            (1..x) args as hash objects where all properties shall be
     *            copied to.
     * 
     * @return target with extended properties
     */
    public static extend(...args: any[]) {

        var deep = args[0] === true;
        var skipInvalid = !(args[1] === false);
        var deepArray = !(args[2] === false);

        var offset = 1;

        if (Reflection.isBoolean(args[0])) {
            offset++;
        }
        if (Reflection.isBoolean(args[1])) {
            offset++;
        }
        if (Reflection.isBoolean(args[2])) {
            offset++;
        }

        var target = args[offset - 1];

        for (var i = offset; i < args.length; i++) {

            var argument = args[i];

            Objects.extendIf(target, argument, deep, null, skipInvalid, deepArray);
        }

        return target;
    };

    /**
     * Low-level API for copying all properties defined within the given hash
     * objects into the given target hash object.
     * 
     * <p>
     * An additional filter is applied via a callback function that will determine
     * if a field should be copied or not.
     * </p>
     * 
     * @param target
     *            the object receiving the copied properties
     * 
     * @param source
     *            the object being copied over the given target hash
     * 
     * @param deep
     *            If true, the merge becomes recursive (AKA. deep copy).
     * 
     * @param filter
     *            callback function using the signature
     *            <code>function(name, target, source){}</code> that must return a
     *            boolean to signal if the property should be copied or not. If not
     *            defined, all properties are copied.
     * 
     * @param skipInvalid
     *            Flag that indicates if we should skip undefined/invalid
     *            properties. Default is <code>true</code>
     * 
     * @param deepArray
     *            {Boolean} deep copy array items as well. Default is
     *            <code>true</code>
     * 
     * @return target with extended properties
     */
    public static extendIf(target: any, source: any, deep: boolean = false, filter: any = null, skipInvalid = true,
        deepArray = true) {

        /*
         * skip invalid sources
         */
        if (!source) {
            return target;
        }

        /*
         * validate
         */
        if (typeof source !== "object") {
            throw "Cannot extend non-object based types: " + source;
        }

        /*
         * copy properties from source hash into target.
         */
        for (var name in source) {

            if (source.hasOwnProperty(name)) {

                var original = target[name];
                var copy = source[name];

                var isDefined = Objects.isDefined(copy);

                /*
                 * skip undefined properties if necessary
                 */
                if (skipInvalid !== false && !isDefined) {
                    continue;
                }

                /*
                 * skip linked references to avoid circular reference
                 */
                if (original === copy && isDefined) {
                    continue;
                }

                /*
                 * apply filter if defined
                 */
                if (filter && !filter.call(null, name, target, source)) {
                    continue;
                }

                /*
                 * deep copy it possible
                 */
                if (deep) {

                    if (Reflection.isObject(original)) {

                        Objects.extendIf(original, copy, deep, filter);

                    } else if (Reflection.isObject(copy)) {

                        target[name] = Objects.extendIf({}, copy, deep, filter);

                    } else if (Reflection.isArray(copy) && deepArray !== false) {

                        target[name] = Objects.extendIf([], copy, deep, filter);

                    } else {

                        target[name] = copy;
                    }

                } else {

                    target[name] = copy;
                }
            }
        }

        return target;
    };

    /**
     * Similar to Objects.extend() but only works with a single source hash and only
     * copy properties that are not yet defined.
     * 
     * @param target
     *            {Object} the target object where properties are copied to
     * 
     * @param source
     *            {Object} the source object being copied
     * 
     * @param deep
     *            {Boolean} If true, the merge becomes recursive (AKA. deep copy).
     * 
     * @param filter
     *            callback function using the signature
     *            <code>function(name, target, source){}</code> that must return a
     *            boolean to signal if the property should be copied or not. If not
     *            defined, all properties are copied.
     * 
     * @return {Object} target
     */
    public static extendIfNot(target: any, source: any, deep: boolean = false, filter: any = null) {

        return Objects.extendIf(target, source, deep,
            function (name: string, target: any, source: any) {

                return !target.hasOwnProperty(name)
                    && (!filter || filter(name, target, source));
            });
    };

    /**
     * Flatten the given object properties encoding them in n-level into a
     * single-level object where all property paths are separated by a dot (.).
     * 
     * @param object
     *            {Object} the object to be flattened
     * 
     * @return {Object} flattened object
     */
    public static flatten = (function () {

        var flatten = function (target: any, source: any, prefix: string | null = null) {

            Objects.each(source, function (name: string, value: any) {

                var path = prefix ? (prefix + "." + name) : name;

                if (Reflection.isObject(value) || Reflection.isArray(value)) {

                    flatten(target, value, path);

                } else {

                    target[path] = value;
                }
            });

            return target;
        };

        return function (object: any) {

            return flatten({}, object);
        };
    })();

    /**
     * Toggle the given value returning option 1 if currently defined as option 2
     * and vice versa.
     * 
     * @param value
     *            the base value for comparison
     * 
     * @param opt1
     *            the option one returned if given value is equal opt2 or null.
     * 
     * @param opt2
     *            the option two returned if given value is equal opt1.
     * 
     * @return opt1 or opt2 according to the above described rules.
     */
    public static toggle(value: any, opt1: any, opt2: any): any {

        if (value == opt1) {

            return opt2;
        }

        return opt1;
    };

    /**
     * Enables object/array navigation by visiting members of the given object using
     * a callback function as a way of looping through properties defined in a Hash
     * Object or elements of an Array.
     * 
     * @param object
     *            the object being looped.
     * 
     * @param callback
     *            function called for every encountered member of the given
     *            object/array. The callback uses the signature
     *            <code>(name, value)</code> for visited properties of a hash
     *            object and <code>(index, value)</code> for array elements.
     * 
     * @param scope
     *            the scope used while calling the callback function. If not
     *            provided, the object being visited is used instead.
     */
    public static each(object: any, callback: (indexOrName: string | number, item: any) => any, scope: any = null) {

        if (Objects.isDefined(object)) {

            var item = null;
            var length = object.length;
            var isObject = length === undefined || Reflection.isObject(object);

            if (!isObject) {

                for (var i = 0; i < length; i++) {

                    item = object[i];

                    if (callback.call(scope || item, i, item) === false) {
                        break;
                    }
                }

            } else {

                for (var name in object) {

                    item = object[name];

                    if (callback.call(scope || item, name, item) === false) {
                        break;
                    }
                }
            }
        }

        return object;
    };

    /**
     * Translate the given object into an array. If already an array, just return as
     * is. If a <code>Object</code> return the values defined in the given object
     * as an array. Anything else is wrapped into an array instance.
     * 
     * @param object
     *            the object object to be converted
     * 
     * @return values in the given object as an array.
     */
    public static toArray(object: any | any[]): any[] {

        if (Reflection.isArray(object)) {

            return object;
        }

        if (Reflection.isObject(object)) {

            var array = [];

            /*
             * copy all object values to array
             */
            for (var name in object) {

                if (object.hasOwnProperty(name)) {

                    array.push(object[name]);
                }
            }

            return array;
        }

        return [object];
    };

    /**
     * Look-up for a single property value within the given object
     * 
     * @param object
     *            {Object} the object we want the property from
     * 
     * @param name
     *            {String} the property name being looked-up
     * 
     * @return {Object} the property's value
     */
    public static get(object: any, name: string) {

        return object[name];
    };

    /**
     * Look-up for all the defined property names under the given object and return
     * it as an array.
     * 
     * @param object
     *            {Object} the object we want the property names from
     * 
     * @return {Array} array of property names
     */
    public static getNames(object: any): string[] {

        var names: string[] = [];

        Objects.each(object, function (name: string) {

            names.push(name);
        });

        return names;
    };

    /**
     * Return the number of properties defined by the given Object.
     * 
     * @param object
     *            {Object} the object being scanned
     * 
     * @return {Number} the number of properties under this object
     */
    public static getLength(object: any): number {

        return Objects.getNames(object).length;
    };

    /**
     * Check if the given object is a defined value by comparing against
     * <code>null</code> and <code>undefined</code> returning <code>true</code>
     * when neither or <code>false</code> otherwise.
     * 
     * @param object
     *            {Object} the object being validated
     * 
     * @return {Boolean} true if neither null or undefined, false otherwise.
     */
    public static isDefined(object: any): boolean {

        return object !== undefined && object !== null;
    };

    /**
     * Simply check if the given object is a valid object value. Primitive types
     * auto-evaluate to false when matching their default values.
     * 
     * @param object
     *            {Object} the object being evaluated.
     * 
     * @return true if a valid value, false otherwise
     */
    public static isValid(object: any): boolean {

        return object ? true : false;
    }

    /**
     * Perform a deep comparison checking if the given two objects match completely.
     * Does not imply that both need to hold the same memory reference/instance.
     * 
     * <p>
     * Compare arrays to match the exact same order. Hash objects need to contain
     * the same properties and other values to match on type/value (simple
     * comparison using <code>==</code>).
     * </p>
     * 
     * @param a
     *            {Object} the first value to be compared
     * 
     * @param b
     *            {Object} the second value to be compared
     * 
     * @param caseSensitive
     *            {Boolean} flag that indicates if the comparison if case sensitive
     * 
     * @return {Boolean} true if both values are equal, false otherwise
     */
    public static equal(a: any, b: any, caseSensitive: boolean = true, compareFunction: Function | null = null) {

        /*
         * return true right away if same value/reference
         */
        if (a === b) {
            return true;
        }

        var equal = compareFunction || Objects.equal;
        var name = null;

        if (typeof a != typeof b) {

            return false;
        }

        if (!Objects.isDefined(a) || !Objects.isDefined(b)) {

            return false;
        }

        if (a instanceof Array && b instanceof Array) {

            if (a.length != b.length) {
                return false;
            }

            for (var i = 0; i < a.length; i++) {

                if (!equal(a[i], b[i], caseSensitive)) {
                    return false;
                }
            }

            return true;
        }

        if (typeof a == "object" && typeof b == "object") {

            for (name in a) {

                if (!equal(a[name], b[name], caseSensitive)) {

                    return false;
                }
            }

            for (name in b) {

                if (!equal(a[name], b[name], caseSensitive)) {

                    return false;
                }
            }

            return true;
        }

        if (caseSensitive !== true) {

            if (Reflection.isString(a)) {
                a = a.toLowerCase();
            }

            if (Reflection.isString(b)) {
                b = b.toLowerCase();
            }
        }

        return a == b;
    };

    /**
     * Deep compare two objects returning the inverse result of
     * {@link Objects#equal()}.
     * 
     * @param a
     *            {Object} the first value to be compared
     * 
     * @param b
     *            {Object} the second value to be compared
     * 
     * @param caseSensitive
     *            {Boolean} flag that indicates if the comparison if case sensitive
     * 
     * @return {Boolean} true if both values are different, false otherwise
     */
    public static notEqual(a: any, b: any, caseSensitive = true): boolean {

        return !Objects.equal(a, b, caseSensitive);
    };

    /**
     * Check if the given source contains all the properties (with the same value)
     * defined in the given target object. If at least one property does not match,
     * returns false.
     * 
     * @param source
     *            {Object} the source object that should contain all target
     *            properties
     * 
     * @param target
     *            {Object} the target object holding the properties compared against
     *            source
     * 
     * @return {Boolean} true if source has all properties of target with the same
     *         value, false otherwise
     */
    public static match(source: any, target: any): boolean {

        for (var name in target) {

            if (!source.hasOwnProperty(name) || target[name] !== source[name]) {

                return false;
            }
        }

        return true;
    };

    /**
     * Compare the two given parameters to each other.
     * 
     * @param a
     *            the first value in the comparison
     * @param b
     *            the second value in the comparison
     * 
     * @return 1 if a > b, 0 if equal or -1 if a < b
     */
    public static compare(a: any, b: any): number {

        if (Reflection.isNumber(a) && Reflection.isNumber(b)) {

            if (isNaN(a) && isNaN(b)) {

                return 0;
            }

            if (isNaN(b)) {

                return 1;
            }

            if (isNaN(b)) {

                return -1;
            }
        }

        if (a < b) {

            return -1;

        } else if (a > b) {

            return 1;
        }

        return 0;
    };

    /**
     * Compare each property of the first object to the the property of the second
     * object. The result is an array of objects holding properties name for field
     * name, oldValue holding the value from the first parameter and newValue for
     * the second parameter. Only changed properties are included.
     * 
     * @return array with object comparison of changed properties
     */
    public static diff(value1: any, value2: any): any {

        var name = null;

        var result: any = [];

        var add = function (name: string, v1: any, v2: any) {

            for (var i = 0; i < result.length; i++) {

                if (result[i].name == name) {
                    return;
                }
            }

            if (v1 != v2) {

                result.push({
                    name: name,
                    oldValue: v1,
                    newValue: v2
                });
            }
        };

        /*
         * first properties of value1
         */
        for (name in value1) {

            if (value1.hasOwnProperty(name)) {

                add(name, value1[name], value2[name]);
            }
        }

        /*
         * and now properties of value2
         */
        for (name in value2) {

            if (value2.hasOwnProperty(name)) {

                add(name, value1[name], value2[name]);
            }
        }

        result.asObject = function () {

            var object: any = {};

            for (var i = 0; i < this.length; i++) {

                var entry = this[i];

                object[entry.name] = entry.newValue;
            }

            return object;
        };

        return result;
    };

    /**
     * Retrieve an array of property names stored within the given hash object. Each
     * element of the array represents a property name of the given hash object.
     * 
     * @param hash
     *            the hash we want the property names from
     * 
     * @return array of property names stored in the given hash
     */
    public static propertyNames(hash: any): string[] {

        var result = [];

        for (var name in hash) {

            if (hash.hasOwnProperty(name)) {

                result.push(name);
            }
        }

        return result;
    };

    /**
     * Parse the given plain String value to its corresponding type in Javascript
     * according to the following table of rules:
     * 
     * <ul>
     * <li><b>"true"</b> => true</li>
     * <li><b>"false"</b> => false</li>
     * <li><b>"1"</b> => 1. This is valid for any numeral (even negative)</li>
     * <li><b>"null"</b> => null</li>
     * <li><b>"undefined"</b> => undefined</li>
     * <li><b>"{\"name\" : \"..\"}"</b> => { name : "..." }. This is for any valid
     * JSON expression (even arrays)</li>
     * </ul>
     * 
     * @param value
     *            {String} the string being parsed or the String itself if it is
     *            just a plain old String
     * 
     * @return {Object} parsed String
     */
    public static parse = (function () {

        var jsonExpression = /^(?:\{.*\}|\[.*\])$/;

        return function (data: string): any {

            if (data === "true") {
                return true;
            }

            if (data === "false") {
                return false;
            }

            if (data === "null") {
                return null;
            }

            if (data === "undefined") {
                return undefined;
            }

            if (Numbers.is(data)) {
                return +data;
            }

            if (jsonExpression.test(data)) {
                return JSON.parse(data);
            }

            if (data.charAt(0) == '"' && data.charAt(data.length - 1) == '"') {
                return JSON.parse(data);
            }

            return data;
        };
    })();

    // ----------------------------------
    // arithmetics
    // ----------------------------------

    /**
     * Concatenate all the given objects into a new single Object. args that
     * are not objects are just appended as is.
     * 
     * @param args
     *            0...x
     * 
     * @return {Object} object containing all added sub-entries.
     */
    public static sum(...args: any[]) {

        var result = Objects.copy(args[0]);

        for (var i = 1; i < args.length; i++) {

            var arg = args[i];

            Objects.extend(result, arg);
        }

        return result;
    };

    /**
     * Subtract all properties within all given objects from the first object passed
     * as an argument and returned it as a new object.
     * 
     * @param args
     *            0...x
     * 
     * @return {Object} object containing subtracted properties.
     */
    public static subtract(...args: any[]) {

        var result: any = Objects.copy(args[0]);

        for (var i = 1; i < args.length; i++) {

            var arg = args[i];

            Objects.each(arg, function (key: string) {

                if (result.hasOwnProperty(key)) {

                    delete result[key];
                }
            });
        }

        return result;
    };

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}