/**
 * Reflection utility class
 * 
 * @author orionframework
 * 
 * 
 * 
 * @class
 * @name orion.utils.Reflection
 */
export class Reflection {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /**
     * Class name to types
     */
    public static TYPES: any = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regexp",
        "[object Object]": "object"
    };

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    /**
     * Inherit all prototype-level functions from the given source object
     * 
     * @param source
     *            the source implementatoin
     * 
     * @param target
     *            the object receiving the callable members.
     */
    public static inherit(source: any, target: any, excluded: string[] = ["constructor"]) {

        var prototype = source.__proto__;
        var names = Object.getOwnPropertyNames(prototype);

        names.forEach(name => {

            if (excluded.indexOf(name) >= 0) {
                return;
            }

            target[name] = Reflection.wrapper(prototype[name], source);
        });

    }

    /**
     * Creates a wrapper callable function to be called against the given context
     * 
     * @param callable  the function to be called
     * @param context the context in which the given function should be called
     * 
     * @return wrapper function
     */
    public static wrapper(callable: Function, context: any): Function {

        return function wrapper(...args: any[]) {

            return callable.apply(context, args)
        };
    }

    /**
     * Convert the given Object instance to its named type. The following types are
     * supported:
     * 
     * <ul>
     * <li><b>Boolean</b> => boolean</li>
     * <li><b>Number</b> => number</li>
     * <li><b>Function</b> => function</li>
     * <li><b>Array</b> => array</li>
     * <li><b>Date</b> => date</li>
     * <li><b>Regexp</b> => regexp</li>
     * <li><b>*</b> => object</li>
     * </ul>
     * 
     * @param obj
     *            the object we want the named type for
     * 
     * @return named type for the given object instance.
     */
    public static type(obj: any): string {

        if (obj === null || obj === undefined) {
            return "null";
        }

        return Reflection.TYPES[Object.prototype.toString.call(obj)] || "object";
    };

    /**
     * Check rather the given value is in fact a Javascript <code>function</code>
     * or not.
     * 
     * @param value
     *            the value being checked
     * 
     * @return <code>true</code> if considered a callable function,
     *         <code>false</code> otherwise
     */
    public static isFunction(value: any): boolean {

        return Reflection.type(value) === "function";
    };

    /**
     * Check rather the given value is in fact a <code>String</code> instance or
     * not.
     * 
     * @param value
     *            the value being checked
     * 
     * @return <code>true</code> if String instance, <code>false</code>
     *         otherwise
     * 
     * @member Reflection
     */
    public static isString(value: any): boolean {

        return Reflection.type(value) === "string";
    };

    /**
     * Check rather the given value is in fact a <code>Boolean</code> instance or
     * not.
     * 
     * @param value
     *            the value being checked
     * 
     * @return <code>true</code> if Boolean instance, <code>false</code>
     *         otherwise
     * 
     * @member Reflection
     */
    public static isBoolean(value: any): boolean {

        return Reflection.type(value) === "boolean";
    };

    /**
     * Check rather the given value is in fact a <code>Number</code> instance or
     * not.
     * 
     * @param value
     *            the value being checked
     * 
     * @return <code>true</code> if Number instance, <code>false</code>
     *         otherwise
     * 
     * @member Reflection
     */
    public static isNumber(value: any): boolean {

        return Reflection.type(value) === "number";
    };

    /**
     * Check rather the given value is in fact an <code>Array</code> instance or
     * not.
     * 
     * @param value
     *            the value being checked
     * 
     * @return <code>true</code> if considered an Array, <code>false</code>
     *         otherwise
     */
    public static isArray(value: any): boolean {

        return Reflection.type(value) === "array";
    };

    /**
     * Check rather the given value is in fact an <code>Date</code> instance or
     * not.
     * 
     * @param value
     *            the value being checked
     * 
     * @return <code>true</code> if considered an Date, <code>false</code>
     *         otherwise
     */
    public static isDate(value: any): boolean {

        return Reflection.type(value) === "date";
    };

    public static isSimple(value: any): boolean {

        var type = Reflection.type(value);

        return type == "string" || type == "boolean" || type == "number"
            || type == "date";
    };

    /**
     * Check rather the given value is in fact a simple object or not.
     * 
     * <p>
     * Logic borrowed from jQuery
     * </p>
     * 
     * @param value
     *            the value being checked
     * 
     * @return <code>true</code> if considered a Hash object, <code>false</code>
     *         otherwise
     */
    public static isObject(value: any): boolean {

        if (value) {

            /*
             * Must be an Object. Because of IE, we also have to check the presence
             * of the constructor property. Make sure that DOM nodes and window
             * objects don't pass through, as well
             */
            if (Reflection.type(value) !== "object" || value.nodeType
                || Reflection.isWindow(value)) {

                return false;
            }

            var hasOwn = Object.prototype.hasOwnProperty;

            try {

                /*
                 * Not own constructor property must be Object
                 */
                if (value.constructor
                    && !hasOwn.call(value, "constructor")
                    && !hasOwn.call(value.constructor.prototype,
                        "isPrototypeOf")) {
                    return false;
                }

            } catch (e) {

                /*
                 * IE8,9 Will throw exceptions on certain host objects
                 */
                return false;
            }

            /*
             * Own properties are enumerated firstly, so to speed up, if last one is
             * own, then all properties are own.
             */
            var key;
            for (key in value) {
                if (value.hasOwnProperty(key)) {
                }
            }

            return key === undefined || hasOwn.call(value, key);
        }

        return false;
    };

    /**
     * Check rather the given object is pointing to the window reference.
     * 
     * @param obj
     *            the object reference being checked
     * 
     * @return true if same as global <code>window
     */
    public static isWindow(obj: any): boolean {

        return obj !== null && obj == obj.window;
    };

    /**
     * Check rather the given type extend/implement the given second type at some point.
     * 
     * <p>
     * Note that this function does create a new instance of the first given type1 so it is not compatible
     * with classes that contain required constructor arguments.
     * </p>
     * 
     * @param type1 
     * @param type2 
     * 
     * @return true if assignable, false otherwise
     */
    public static isAssignableFrom(type1: any, type2: any): boolean {

        if (!type1) {
            return false;
        }

        return new type1() instanceof type2;
    }

    /**
     * Utility that evaluate the given value trying to look for function types. If
     * the given value is a function, execute it using the given context and
     * parameters (array) and return its response instead. If a hash object is given
     * instead, all properties of the given object are evaluated instead. Same if
     * the given value is an array.
     * 
     * @param value
     *            the value we are evaluating
     * 
     * @param context
     *            the context used to call in case we find a function
     * 
     * @param params
     *            the parameters passed the invoked function
     * 
     * @return process value returned by the evaluated function or the same given
     *         value otherwise.
     */
    public static callable(value: any, context: any, params: any): any {

        if (Reflection.isFunction(value) && value.callable !== false) {

            return value.apply(context, params);

        } else if (Reflection.isArray(value)) {

            for (var i = 0; i < value.length; i++) {

                value[i] = Reflection.callable(value[i], context, params);
            }

        } else if (Reflection.isObject(value)) {

            for (var name in value) {

                if (value.hasOwnProperty(name)) {

                    value[name] = Reflection.callable(value[name], context, params);
                }
            }
        }

        return value;
    };

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}