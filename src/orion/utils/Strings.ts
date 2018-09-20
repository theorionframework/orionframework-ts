import { Objects } from "./Objects";
import { Character } from "./Character";

/**
 * String utility class
 * 
 * @author orionframework
 * 
 * 
 * 
 * @class
 * @name orion.utils.Strings
 */
export class Strings {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /**
     * The default character used to separate lines (line-break);
     */
    public static LINE_SEPARATOR = "\n";

    /**
     * RegExp expression used to trim the left side of a String
     * 
     * @see Strings#trimLeft()
     */
    public static TRIM_LEFT = /^\s+/;

    /**
     * RegExp expression used to trim right left side of a String
     * 
     * @see Strings#trimRight()
     */
    public static TRIM_RIGHT = /\s+$/;

    /**
     * Represents an empty String value.
     */
    public static EMPTY = "";

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    /**
     * Capitalize the first character of the given String
     * 
     * @param value
     *            {String} the String value being capitalized
     * 
     * @return {String} capitalized String
     * 
     * @member Strings
     */
    public static capitalize(value: string): string {

        if (typeof value === "string" && value.length > 0) {

            return value.charAt(0).toUpperCase() + value.substring(1);
        }

        return value;
    };

    /**
     * UN-Capitalize the first character of the given String
     * 
     * @param value
     *            the String value being UN-capitalized
     * 
     * @return UN-capitalized String
     * 
     * @member Strings
     */
    public static uncapitalize(value: string): string {

        if (typeof value === "string" && value.length > 0) {

            return value.charAt(0).toLowerCase() + value.substring(1);
        }

        return value;
    };

    /**
     * Format the given String injecting the indexed parameters based on the
     * arguments of the given parameters array.
     * 
     * @param value
     *            {String} the string being formatted
     * 
     * @param parameters
     *            {String} the parameters to be injected
     * 
     * @return {String} formatted string;
     */
    public static format(format: string, args: any[]): string {

        return format.replace(/{(\d+)}/g, function (match, i) {

            var value = args[i];

            return Objects.isDefined(value) ? value : match;
        });
    };

    /**
     * Check rather the given String value starts with the given prefix value
     * returning <code>true</code> if so, or <code>false</code> otherwise
     * 
     * @param str
     *            {String} the String value being evaluated
     * 
     * @param prefix
     *            {String} the prefix String value checked against the given String
     * 
     * @param caseSensitive
     *            {Boolean} flag that indicates if we should perform comparison
     *            using case sensitive
     * 
     * @return <code>true</code> if the given String value has the same initial
     *         prefix, or <code>false</code> otherwise
     */
    public static startsWith(str: string, prefix: string, caseSensitive: boolean = true): boolean {

        if (!Objects.isDefined(str)) {
            return false;
        }

        if (caseSensitive === false) {
            str = str.toLowerCase();
            prefix = prefix.toLowerCase();
        }

        return str.indexOf(prefix) === 0;
    };

    /**
     * Verify if the given string ends with the given value
     * 
     * @param str
     *            {String} the string we are verifying
     * 
     * @param value
     *            {String} the value used while comparing
     * 
     * @param caseSensitive
     *            flag that indicates if we should perform comparison using case
     *            sensitive
     * 
     * @return {Boolean} true if the given string ends with the given value, false
     *         otherwise
     */
    public static endsWith(str: string, value: string, caseSensitive: boolean = true): boolean {

        if (!Objects.isDefined(str)) {
            return false;
        }

        if (caseSensitive === false) {
            str = str.toLowerCase();
            value = value.toLowerCase();
        }

        return str.length > value.length
            && str.indexOf(value) == (str.length - value.length);
    };

    /**
     * Check rather the given String value contains the given prefix value returning
     * <code>true</code> if so, or <code>false</code> otherwise
     * 
     * @param str
     *            {String} the String value being evaluated
     * 
     * @param prefix
     *            {String} the prefix String value checked against the given String
     * 
     * @param caseSensitive
     *            {Boolean} flag that indicates if we should perform comparison
     *            using case sensitive
     * 
     * @return {Boolean} <code>true</code> if the given String value contains the
     *         given prefix, or <code>false</code> otherwise
     */
    public static contains(str: string, prefix: string, caseSensitive: boolean = true): boolean {

        if (!Objects.isDefined(str)) {
            return false;
        }

        if (caseSensitive === false) {
            str = str.toString().toLowerCase();
            prefix = prefix.toString().toLowerCase();
        }

        return str.toString().indexOf(prefix) >= 0;
    };

    /**
     * Replace within the given String value, all occurrences of the existing value
     * with the given new String value.
     * 
     * @param str
     *            {String} the String value being parsed
     * 
     * @param oldValue
     *            {String} the existing value to be replaced
     * 
     * @param newValue
     *            {String} the new value to be replaced
     * 
     * @param regex
     *            {Boolean} flag that indicates if we should use regex 'g' to
     *            replace all or not. If you're replacing characters that may
     *            conflict with regex, you might not want to use this as true.
     *            Defaults to false
     * 
     * @return formatted value containing the replaced values
     */
    public static replaceAll(str: string, oldValue: string, newValue: string, regex: boolean = false): string {

        if (regex !== true) {

            var result = str;
            var i = result.indexOf(oldValue);

            while (i >= 0) {

                result = result.replace(oldValue, newValue);

                i = result.indexOf(oldValue);
            }

            return result;
        }

        return str.replace(new RegExp(oldValue, "g"), newValue);
    };

    /**
     * Method similar to String.replace() used to replace a certain string
     * value/regex expression within a given string.
     * 
     * <p>
     * It adds the ability to start replacing from a given starting index (in which
     * is used to substring before we can do the replace).
     * </p>
     * 
     * @param str
     *            {String} the main string template
     * 
     * @param key
     *            {String} the key we want to replace
     * 
     * @param value
     *            {String} the replacing the given key
     * 
     * @param index
     *            {int} the starting index in the given string where we want to
     *            start replacing from (not required)
     * 
     * @return {String} replaced/merged string
     */
    public static replace(str: string, key: string, value: string, index: number = 0): string {

        if (index) {

            var begin = str.substring(0, index);
            var end = str.substring(index);

            return begin + end.replace(key, value);
        }

        return str.replace(key, value);
    };

    /**
     * Trim both left and right sides of the given string removing trailing and
     * white space characters.
     * 
     * @param str
     *            {String} the String value being processed
     * 
     * @return {String} trimmed string
     */
    public static trim(str: string): string {

        if (!Objects.isDefined(str)) {
            return Strings.EMPTY;
        }

        /*
         * use native trim whenever possible
         */
        if (String.prototype.trim) {

            return str.trim();
        }

        return str.toString().replace(Strings.TRIM_LEFT, Strings.EMPTY).replace(
            Strings.TRIM_RIGHT, Strings.EMPTY);
    };

    /**
     * Camel-case the given String value on every occurrence of the given token;
     * 
     * @param str the string being processed
     * 
     * @param token the token being used as a separator
     * 
     * @return the given String camel-cased
     */
    public static camelCaseByToken(str: string, token: string): string {

        var parts = str.split(token);

        for (var i = 1; i < parts.length; i++) {

            parts[i] = Strings.capitalize(parts[i]);
        }

        return parts.join(Strings.EMPTY);
    };

    /**
     * <p>
     * Gets the substring after the first occurrence of a delimiter. The delimiter
     * is not returned.
     * </p>
     * 
     * <p>
     * A <code>null</code> string input will return <code>null</code>. An empty
     * (Strings.EMPTY) string input will return the empty string. A <code>null</code>
     * delimiter will return the empty string if the input string is not
     * <code>null</code>.
     * </p>
     * 
     * <p>
     * If nothing is found, the empty string is returned.
     * </p>
     * 
     * @param str
     *            {String} the String to get a substring from, may be null
     * @param delimiter
     *            {String} the String to search for, may be null
     * @return {String} the substring after the first occurrence of the delimiter,
     *         null if null String input
     */
    public static substringAfter(str: string, delimiter: string): string {

        if (!str) {
            return Strings.EMPTY;
        }

        var pos = str.indexOf(delimiter);

        if (pos == -1) {
            return Strings.EMPTY;
        }

        return str.substring(pos + delimiter.length);
    };

    /**
     * <p>
     * Gets the substring before the first occurrence of a delimiter. The delimiter
     * is not returned.
     * </p>
     * 
     * <p>
     * A <code>null</code> string input will return <code>null</code>. An empty
     * (Strings.EMPTY) string input will return the empty string. A <code>null</code>
     * delimiter will return the empty string if the input string is not
     * <code>null</code>.
     * </p>
     * 
     * <p>
     * If nothing is found, the empty string is returned.
     * </p>
     * 
     * @param str
     *            {String} the String to get a substring from, may be null
     * @param delimiter
     *            {String} the String to search for, may be null
     * @return {String} the substring before the first occurrence of the delimiter,
     *         null if null String input
     */
    public static substringBefore(str: string, delimiter: string): string {

        if (!str) {
            return Strings.EMPTY;
        }

        var pos = str.indexOf(delimiter);

        if (pos == -1) {
            return Strings.EMPTY;
        }

        return str.substring(0, pos);
    };

    /**
     * Trim the left side of the given string removing trailing and white space
     * characters.
     * 
     * @param string
     *            the String value being processed
     * 
     * @return trimmed string
     */
    public static trimLeft(str: string): string {

        if (!Objects.isDefined(str)) {
            return Strings.EMPTY;
        }

        return str.toString().replace(Strings.TRIM_LEFT, Strings.EMPTY);
    };

    /**
     * Trim the right sides of the given string removing trailing and white space
     * characters.
     * 
     * @param string
     *            {String} the String value being processed
     * 
     * @return {String} trimmed string
     */
    public static trimRight(str: string): string {

        if (!Objects.isDefined(str)) {
            return Strings.EMPTY;
        }

        return str.toString().replace(Strings.TRIM_RIGHT, Strings.EMPTY);
    };

    /**
     * <p>
     * Left pad a String with a specified String.
     * </p>
     * 
     * <p>
     * Pad to a size of <code>size</code>.
     * </p>
     * 
     * @param str
     *            {String} the String to pad out, may be null
     * @param size
     *            {Number} the size to pad to
     * @param padChar
     *            {String} the String to pad with, null or empty treated as single
     *            space
     * 
     * @return {String} left padded String or original String if no padding is
     *         necessary, <code>null</code> if null String input
     */
    public static padLeft(str: string | null, size: number, padChar: string): string | null {

        if (str === null) {
            return null;
        }

        var pads = size - str.length;

        if (pads <= 0) {
            return str;
        }

        var builder = [];

        for (var i = 0; i < pads; i++) {
            builder.push(padChar);
        }

        builder.push(str);

        return builder.join(Strings.EMPTY);
    };

    /**
     * <p>
     * Left pad a String with a specified String.
     * </p>
     * 
     * <p>
     * Pad to a size of <code>size</code>.
     * </p>
     * 
     * @param str
     *            {String} the String to pad out, may be null
     * @param size
     *            {Number} the size to pad to
     * @param padChar
     *            {String} the String to pad with, null or empty treated as single
     *            space
     * 
     * @return {String} left padded String or original String if no padding is
     *         necessary, <code>null</code> if null String input
     */
    public static padRight(str: string | null, size: number, padChar: string): string | null {

        if (str === null) {
            return null;
        }

        var pads = size - str.length;

        if (pads <= 0) {
            return str;
        }

        var builder = [str];

        for (var i = 0; i < pads; i++) {
            builder.push(padChar);
        }

        return builder.join(Strings.EMPTY);
    };

    /**
     * Truncate the given string value appending "..." to the substring extracted
     * with the given length if the given string's length is greater than the the
     * given length value (number) + 3.
     * 
     * @param value
     *            {String} the string value to be truncated
     * 
     * @param length
     *            {int} the max length allowed
     * 
     * @return {String} truncated string
     */
    public static truncate(value: string, length: number): string {

        if (value.length > (length + 3)) {

            return value.substring(0, length) + "...";
        }

        return value;
    }

    /**
     * Count how many times a given delimiter token exists within a given string
     * 
     * @param value 
     *            {String} the value being scanned
     * 
     * @param token 
     *            {String} the token we are loooking for
     * 
     * @return {Number} number of tokens in the given string
     */
    public static count(value: string, token: string): number {

        let count = 0;
        let offset = 0;
        let index = value.indexOf(token);

        while (index >= 0) {

            count += 1;

            offset = index + token.length;

            index = value.indexOf(token, offset);
        }

        return count;
    }

    /**
     * <p>
     * Parse the given String into the most human-readable possible String.
     * </p>
     * 
     * <p>
     * This method transforms a field name or path into a readable string.
     * </p>
     * 
     * <p>
     * We tokenize upper case fields to a space character. We remove any "@" chars
     * and also replace "_", "-" or "." for a blank/space character.
     * </p>
     * 
     * @param string
     *            {String} the string to be transformed
     * 
     * @return {String} the label
     */
    public static getLabel(str: string): string {

        var label = str;

        label = Strings.replaceAll(label, "@", Strings.EMPTY, true);
        label = Strings.replaceAll(label, "_", " ", true);
        label = Strings.replaceAll(label, "-", " ", true);
        label = Strings.replaceAll(label, "\\.", " ", true);

        label = Strings.tokenizeByCamelCase(label, " ");

        label = Strings.capitalize(label);

        label = Strings.trim(label);

        return label;
    };

    /**
     * Find the closest word within the given string, based on the given cursor
     * index position being a required parameter used to find out the closest word
     * from that location.
     * 
     * @param string
     *            {String} the string value containing the words
     * 
     * @param cursor
     *            {int} the index position of the cursor within the given string
     *            (usually obtained from a text input selection)
     * 
     * @return {Object} hash object containing closest word from the given index
     *         location and the starting index from where the word was retrieved:
     *         <code><{ value : '', index : 000}</code>
     */
    public static getClosestWord(str: string, cursor: number): {
        value: string,
        index: number
    } {

        var words = str.split(" ");

        var index = 0;

        for (var i = 0; i < words.length; i++) {

            index += 1;

            var word = words[i];
            var first = index;
            var last = index + word.length;

            if (cursor >= first && cursor <= last) {

                return {
                    value: word,
                    index: index - 1
                };
            }

            index += word.length;
        }

        return {
            value: Strings.EMPTY,
            index: -1
        };

        // var words = [];
        // var index = 0;
        // var start = string.substring(cursor, 1) == " " ? string
        // .substring(0, cursor).lastIndexOf(" ") : cursor;
        //
        // /*
        // * retrieve characters from cursor to left first
        // */
        // for ( var i = start; i >= 0; i--) {
        //
        // var character = string.charAt(i);
        //
        // if (character != ' ') {
        //
        // index = i;
        //
        // words.unshift(character);
        //
        // } else {
        // break;
        // }
        // }
        //
        // /*
        // * now retrieves all characters after the cursor until the first white
        // space
        // */
        // for ( var i = (cursor + 1); i < string.length; i++) {
        //
        // var character = string[i];
        //
        // if (character != ' ') {
        // words.push(character);
        // } else {
        // break;
        // }
        // }
        //
        // return {
        // value : words.join(''),
        // index : index
        // };
    };

    /**
     * Tokenize the given String by camel case replacing upper case characters by
     * the given token.
     * 
     * @param string
     *            {String}
     * 
     * @param token
     *            {String}
     * 
     * @return {String} text
     */
    public static tokenizeByCamelCase(str: string, token: string): string {

        if (!str) {

            return str;
        }

        var result = [str.substring(0, 1)];
        var previous = false;

        for (var i = 1; i < str.length; i++) {

            var upper = str.charAt(i).toUpperCase();
            var lower = str.charAt(i).toLowerCase();

            if (upper != lower && upper == str.charAt(i)) {

                if (!previous) {
                    result.push(token);
                }

                result.push(str.charAt(i).toLowerCase());

                previous = true;

            } else {

                result.push(str.charAt(i));
                previous = false;
            }
        }

        return result.join(Strings.EMPTY);
    };

    /**
     * Generate a slug for the given String value replacing spaces and special
     * characters per valid slug characters.
     * 
     * @param the
     *            {String} value used to generate the slug
     * 
     * @return {String} generated slug for the given value
     */
    public static slugfy(value: string) {

        var replace: Function = Strings.replaceAll;

        var slug = value;

        /*
         * remove special characters
         */
        slug = Character.clean(slug);

        slug = replace(slug, " ", "-");
        slug = replace(slug, "?", Strings.EMPTY);
        slug = replace(slug, ",", Strings.EMPTY);
        slug = replace(slug, ",", Strings.EMPTY);
        slug = replace(slug, ".", Strings.EMPTY);
        slug = replace(slug, "'", Strings.EMPTY);
        slug = replace(slug, "\n", "-");
        slug = replace(slug, "--", "-");
        slug = slug.toLowerCase();

        return slug;
    };

    /**
     * Split the given value by comma creating a list of anchor (<a>) for each one
     * of the given values.
     * 
     * @param value
     *            {String} the value to be tagged
     * 
     * @return {Array} list of tags for each value int he comma separated string
     */
    public static tagfy(value: string) {

        if (!value) {
            return Strings.EMPTY;
        }

        var tags = value.split(",");
        var result: string[] = [];

        Objects.each(tags, function () {

            var tag = "<a class='tag'>" + this + "</a> ";

            result.push(tag);
        });

        return result.join(Strings.EMPTY);
    };

    public static lineBreak(value: string): string {

        return value ? value.split("\n").join("<br />") : Strings.EMPTY;
    };

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/

}