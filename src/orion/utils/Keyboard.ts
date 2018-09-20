/**
 * Contains constants and utility functions to work with keyboard events
 * 
 * <ul class="import">
 * <li>import orion.reflect.Package;</li>
 * </ul>
 * 
 * @author orionframework
 * 
 * 
 */
export class Keyboard {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /**
     * Code that represents the keyboard Backspace key
     * 
     * @constant
     */
    public static BACKSPACE = 8;

    /**
     * Code that represents the keyboard Tab key
     * 
     * @constant
     */
    public static TAB = 9;

    /**
     * Code that represents the keyboard Enter key
     * 
     * @constant
     */
    public static ENTER = 13;

    /**
     * Code that represents the keyboard Escape key
     * 
     * @constant
     */
    public static ESCAPE = 27;

    /**
     * Code that represents the keyboard Space key
     * 
     * @constant
     */
    public static SPACE = 32;

    /**
     * Code that represents the keyboard delete key
     * 
     * @constant
     */
    public static DELETE = 46;

    /**
     * Code that represents the keyboard plus key
     * 
     * @constant
     */
    public static PLUS = 107;

    /**
     * Code that represents the keyboard minus key
     * 
     * @constant
     */
    public static MINUS = 109;

    // ----------------------------------
    // arrows
    // ----------------------------------

    /**
     * Code that represents the keyboard Left Arrow key
     * 
     * @constant
     */
    public static LEFT_ARROW = 37;

    /**
     * Code that represents the keyboard Up Arrow key
     * 
     * @constant
     */
    public static UP_ARROW = 38;

    /**
     * Code that represents the keyboard Right Arrow key
     * 
     * @constant
     */
    public static RIGHT_ARROW = 39;

    /**
     * Code that represents the keyboard Down Arrow key
     * 
     * @constant
     */
    public static DOWN_ARROW = 40;

    /**
     * Code that represents the keyboard Page Down key
     * 
     * @constant
     */
    public static PAGE_DOWN = 34;

    /**
     * Code that represents the keyboard Page Up key
     * 
     * @constant
     */
    public static PAGE_UP = 33;

    /**
     * Code that represents the keyboard Comma key
     * 
     * @constant
     */
    public static COMMA = 188;


    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    // -------------------------------------------------
    // static
    // -------------------------------------------------

    /**
     * Check rather the given keyboard code match any of the following declared
     * keys.
     * 
     * @param keyCode
     *            {int} the keyCode being tested
     * 
     * @param arguments
     *            (1..n) being any of the sequenced arguments passed on this method
     * 
     * @return {Boolean} true if any of the given keys, false otherwise
     */
    public static is(keyCode: number, ...args: number[]): boolean {

        for (var i = 0; i < args.length; i++) {

            if (keyCode === arguments[i]) {

                return true;
            }
        }

        return false;
    }

    /**
     * Verify if the given keyCode points to any of the meta keys including: enter,
     * tab, backspace and escape.
     * 
     * @param keycode
     *            the keyboard key we want to verify
     * 
     * @member Keyboard
     * @name isMeta
     * @function
     * 
     * @member Keyboard
     */
    public static isMeta(keyCode: number): boolean {

        if (Keyboard.is(keyCode, Keyboard.ENTER, Keyboard.TAB, Keyboard.BACKSPACE,
            Keyboard.DELETE, Keyboard.ESCAPE)) {

            return true;
        }

        return false;
    }

    /**
     * Verify if the given keyCode points to any of the arrow keyboard keys
     * 
     * @param keycode
     *            the keyboard key we want to verify
     * 
     * @member Keyboard
     * @name isArrow
     * @function
     * 
     * @member Keyboard
     */
    public static isArrow(keyCode: number): boolean {

        if (Keyboard.is(keyCode, Keyboard.LEFT_ARROW, Keyboard.UP_ARROW,
            Keyboard.RIGHT_ARROW, Keyboard.DOWN_ARROW)) {

            return true;
        }

        return false;
    }

    /**
     * Check if the given Keyboard's code represents a digit (number) from 0 to 9.
     * 
     * @param keyCode
     *            {int} the keyboard's key code
     * 
     * @return true if a digit, false otherwise
     * 
     * @member Keyboard
     */
    public static isDigit(keyCode: number): boolean {

        return (keyCode >= 96 && keyCode <= 105)
            || (keyCode >= 48 && keyCode <= 57);
    }


    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}