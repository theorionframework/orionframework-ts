/**
 * GUID helper class
 * 
 * @class
 * @name GUID
 * 
 * @author orionframework
 * 
 * 
 */
export class GUID {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/


    /**
     * Prefix prepended between each generated GUID
     */
    public static prefix = "orion";

    /**
     * Storage for generated values
     * 
     * @private
     */
    public static value = 0;

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    /**
     * Generate and return the next ID number
     * 
     * @return next generated GUID
     * 
     * @member GUID
     */
    public static next(prefix: string): string {

        var uid: string = (GUID.value++).toString();

        if (prefix) {

            return prefix + "-" + uid;
        }

        return uid;
    }

    /**
     * Look up for the GUID of the given item by checking for a property named
     * <code>GUID</code> declared directly within the given item. If not defined,
     * a new GUID is assigned and returned.
     * 
     * @param item
     *            the item we want the GUID from
     * 
     * @return GUID from the given item
     */
    public static get(item: any): string {

        if (!item.guid) {

            item.guid = GUID.next(GUID.prefix);
        }

        return item.guid;
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}