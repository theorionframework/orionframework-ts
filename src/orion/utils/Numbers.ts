/**
 * Number utility class
 * 
 * @author orionframework
 * 
 * 
 * 
 * @class
 * @name orion.utils.Numbers
 */
export class Numbers {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    // ----------------------------------
    // constants
    // ----------------------------------

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

	/*----------------------------------------------------------
	 * METHODS
	 *----------------------------------------------------------*/

    /**
     * Generate a random number between two given numbers
     * 
     * @param from
     *            the smaller number
     * 
     * @param to
     *            the largest number
     * 
     * @return random between both
     * 
     * @member Numbers
     */
    public static random(from: number | null = null, to: number | null = null): number {

        if (from == null || to == null) {
            return Math.random();
        }

        return Math.floor(Math.random() * (to - from + 1) + from);
    };

    /**
     * Round up the given decimal value from 1 decimal after comma.
     * 
     * @param value
     *            {Number} the number being rounded up
     * 
     * @return {Number} number rounded up
     */
    public static ceilDecimal(value: number): number {

        return Math.ceil(value * 100) / 100;
    };

    /**
     * Check if the given String value is a Number value or not
     * 
     * @param value
     *            {String} the String value being tested
     * 
     * @return {Boolean} true if a number, false otherwise
     */
    public static is(value: any): boolean {

        return !isNaN(parseFloat(value)) && isFinite(value);
    };

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}