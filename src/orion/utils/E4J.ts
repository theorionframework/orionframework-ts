import { Objects } from "./Objects";

/**
 * E4J
 * 
 * @author orionframework
 * 
 * 
 * 
 * @name orion.utils.E4J
 * @class
 */
export class E4J {

    /**
     * Extract the value for the given expression. Similar to E4X on XML (XPath)
     * where you can use <code>.</code> to navigate through the objects.
     * 
     * <pre>
     * &lt;b&gt;Sample:&lt;/b&gt;
     * 
     * var person = {
     * 	address : {
     * 		street : &quot;Av. Brasil&quot;
     * };
     * 
     * E4J.read(&quot;address.street&quot;, person ); // returns &quot;Av. Brasil&quot;
     * </pre>
     * 
     * Note that the syntax also applies for proper setters/getter convention where
     * your source object could be a class and the properties could be wrapped
     * around getters and setter methods.
     * 
     * @param source
     *            {Object} the object we are reading from
     * 
     * @param expression
     *            {String} the expression we are evaluating
     * 
     * @return {Object} value found within the given expression
     */
    public static read(source: any, expression: string): any {

        var data = source;

        var keys = expression.split(".");

        /*
         * because JS allows object properties to contain a "." on the name, we do a
         * quick look-up if found, return it instead of reading item-by-item
         */
        if (keys.length > 1) {

            var value = data[expression];

            if (Objects.isDefined(value)) {

                return value;
            }
        }

        for (var i = 0; i < keys.length; i++) {

            if (data) {

                data = data[keys[i]];
            }
        }

        return data;
    };


    /**
     * Write the given value under the given source object within the given
     * expression.
     * 
     * @param source
     *            {Object} the object we are writing to
     * 
     * @param expression
     *            {String} the expression pointing to the property we are writing to
     * 
     * @param value
     *            {Object} the value being set
     * 
     * @param initialize
     *            {Boolean} flag indicating if we should create objects necessary to
     *            satisfy the existence of the objects pointed by the expression to
     *            write the given value
     * 
     * @return {Boolean} true if written the given value, false otherwise
     */
    public static write(source: any, expression: string, value: any, initialize = false): boolean {

        var data = source;

        var keys = expression.split(".");

        var length = keys.length;

        for (var i = 0; i < length; i++) {

            if (i == length - 1) {

                data[keys[i]] = value;

                return true;
            }

            var node = data[keys[i]];

            if (!node && initialize) {

                node = {};

                data[keys[i]] = node;
            }

            if (!node) {

                return false;
            }

            data = node;
        }

        return false;
    }

    /**
     * Extend each given property of the given object into the given target but
     * instead of simply copying its value to, use E4J expressions to write the
     * values. This means that if you have a property name defined as
     * "application.label" then it will write on the target object as
     * <code>object.application.label=...</code>.
     * 
     * @param target
     *            {Object} the object receiving the copied properties
     * 
     * @param object
     *            {Object} the object being copied
     */
    public static extend(target: any, object: any): any {

        Objects.each(object, function (name: string, value: any) {

            E4J.write(target, name, value, true);
        });

        return target;
    }
}