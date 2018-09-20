import { Strings } from "./Strings";
import { Objects } from "./Objects";
import { unescape } from "./Globals";


/**
 * URL utility class
 * 
 * @author orionframework
 * 
 * 
 * 
 * <ul class="import">
 * <li>import orion.utils.Strings;</li>
 * </ul>
 * 
 * @class
 * @name URLs
 */
export class URLs {

    /**
     * Join the given url to the given arguments.
     * 
     * @param url
     *            the main url to join
     * 
     * @param args
     *            array of arguments you would like to be joined to your URL
     * 
     * @return joined url
     * 
     * @member URLs
     */
    public static join(url: string, args: string[]) {

        for (var i = 0; i < args.length; i++) {

            var arg = args[i];

            if (arg.indexOf("=") >= 0) {

                if (url.indexOf("?") >= 0) {

                    url += "&" + arg;
                } else {

                    url += "?" + arg;
                }
            } else {

                if (url.lastIndexOf("/") == (url.length - 1)) {
                    url = url.substring(0, url.length - 1);
                }

                if (arg.lastIndexOf("/") == (arg.length - 1)) {
                    arg = arg.substring(0, arg.length - 1);
                }

                if (arg.indexOf("/") !== 0 && arg.indexOf("#") !== 0) {
                    arg = "/" + arg;
                }

                url += arg;
            }
        }

        var replace = Strings.replaceAll;

        if (url.indexOf("http://") >= 0) {

            var result = url.substring(0, url.indexOf("//") + 2);

            result += replace(url.substring(result.length), "//", "/");

            return result;
        }

        return replace(url, "//", "/");
    };

    public static get(url: string): string {

        var index = url.indexOf("?");

        return index >= 0 ? url.substring(0, index) : url;
    };

    /**
     * Transform the given hash object into a valid URL query string
     * 
     * @param params
     *            {Object} parameters to be converted
     * 
     * @return {String} valid query String for a URL
     */
    public static toQueryString(params: any): string {

        var values: string[] = [];

        Objects.each(params, function (name: string, value: any) {

            values.push(name + "=" + encodeURIComponent(value));
        });

        return values.join("&");
    };

    /**
     * Parse the given query string into a JavaScript hash object holding the query
     * string key -> value.
     * 
     * @param query
     *            the HTTP URL/query string
     * 
     * @param ignore
     *            indicates if we should ignore the query string question mark and
     *            simply replace the variables in it. Pass true if you are sure
     *            you're only providing the query string and not the complete url
     * 
     * @return hash object containing the query string values
     */
    public static getQueryString(url: string): string | null {

        var index = url.indexOf("?");

        if (index >= 0) {

            url = url.substring(index + 1);

            index = url.indexOf("#");

            if (index >= 0) {

                url = url.substring(0, index);
            }

            return url;
        }

        return null;
    };

    /**
     * Parse the given query string into a JavaScript hash object holding the query
     * string key -> value.
     * 
     * @param query
     *            the HTTP URL/query string
     * 
     * @param ignore
     *            indicates if we should ignore the query string question mark and
     *            simply replace the variables in it. Pass true if you are sure
     *            you're only providing the query string and not the complete url
     * 
     * @return hash object containing the query string values
     */
    public static fromQueryString(query: string, parseUrl: boolean = true): any {

        if (parseUrl !== false) {

            query = URLs.getQueryString(query) || query;
        }

        var result: any = {};

        if (query && query.indexOf("=") > 0) {

            query = unescape(query);

            query = Strings.replaceAll(query, "+", " ");
            // TODO: look into issues with unescape

            var variables = query.split("&");

            for (var i = 0; i < variables.length; i++) {

                var variable = variables[i];
                var values = variable.split("=");
                var name = (values[0].indexOf("?") === 0) ? values[0].substring(1)
                    : values[0];
                var value = values[1];

                name = decodeURIComponent(name);
                value = decodeURIComponent(value);

                result[name] = value;
            }
        }

        return result;
    };
}