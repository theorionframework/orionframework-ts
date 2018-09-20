import { EventDispatcher } from "../core/EventDispatcher";
import { Reflection } from "../utils/Reflection";
import { Strings } from "../utils/Strings";
import { Arrays } from "../utils/Arrays";
import { Objects } from "../utils/Objects";
import { E4J } from "../utils/E4J";
import { QueryFilter } from "./QueryFilter";
import { QueryFilterEntry } from "./QueryFilterEntry";
import { QueryFilterAggregator } from "./QueryFilterAggregator";
import { QueryFilterOperator } from "./QueryFilterOperator";

/**
 * Component used to encapsulate a set of query filters.
 * 
 * @augments orion.core.EventDispatcher
 * 
 * @class
 * @name orion.query.QueryFilterGroup
 * 
 * @author orionframework
 * 
 * 
 */
export class QueryFilterGroup extends EventDispatcher {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/


    /**
     * Event dispatched whenever the content of this query changes.
     * Parameters include:
     * 
     * <table class="events"> <thead>
     * <tr>
     * <td>Name</td>
     * <td>Type</td>
     * <td>Description</td>
     * </tr>
     * </thead> <tbody>
     * <tr>
     * <td>name</td>
     * <td>String</td>
     * <td>The property being changed</td>
     * </tr>
     * <tr>
     * <td>type</td>
     * <td>String</td>
     * <td>The type of change occurring</td>
     * </tr>
     * <tr>
     * <td>value</td>
     * <td>Object</td>
     * <td>The value being changed</td>
     * </tr>
     * <tr>
     * <td>source</td>
     * <td>orion.query.QueryFilterGroup</td>
     * <td>the source group that originated the change,  we are
     * hierarchical.</td>
     * </tr>
     * </tbody> </table>
     * 
     * @event
     */
    public static readonly ON_CHANGE = "onChange";

    /**
     * Event dispatched whenever there's a change in the filters in this
     * query group. Note that child group changes are not tracked from by
     * this event, for that refer to {@link #ON_CHANGE} instead. Parameters
     * include:
     * 
     * <table class="events"> <thead>
     * <tr>
     * <td>Name</td>
     * <td>Type</td>
     * <td>Description</td>
     * </tr>
     * </thead> <tbody>
     * <tr>
     * <td>name</td>
     * <td>String</td>
     * <td>The property being changed</td>
     * </tr>
     * <tr>
     * <td>type</td>
     * <td>String</td>
     * <td>The type of change occurring</td>
     * </tr>
     * <tr>
     * <td>value</td>
     * <td>Object</td>
     * <td>The value being changed</td>
     * </tr>
     * </tbody> </table>
     */
    public static readonly ON_FILTER = "onFilter";

    public static FILTERS = "filters";

    public static CONTAINS = "contains";

    public static ADD = "add";

    public static UPDATE = "update";

    public static REMOVE = "remove";

    public static RESET = "reset";

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * Default aggregator used to separate each filter. Either "and" or
     * "or".
     * 
     * @type String
     * 
     * @default null
     */
    public defaultAggregator: QueryFilterAggregator;

    /**
     * Function used to filter items via {@link #find()} method used to
     * compare an element of this collection against a defined filter. The
     * signature of this function includes:
     * <code>function(element, filter){}</code> where <b>element</b> is
     * the element being filtered and <b>filter</b> is the object holding
     * the field being filtered, value and operator. Note that the field is
     * ignored if the elements stored in this list are simple types (String,
     * Number, Date and int).
     * 
     * @param left
     *            {Object} the left side value to be compared
     * 
     * @param right
     *            {Object} the right side value to be compared
     * 
     * @param operator
     *            {String} the operator type used within the comparison
     * 
     * @param caseSensitive
     *            {Boolean} indicates rather the comparison should use case
     *            sensitive or not
     * 
     * @throws {Error}
     *             if there is not a compare function mapped for the given
     *             comparison type
     */
    public filterFunction: Function = function (left: any, right: any, operator: string, caseSensitive: boolean = true) {

        var compareFunction = QueryFilterGroup.getComparators()[operator];

        /*
         * validate compare function
         */
        if (!Reflection.isFunction(compareFunction)) {

            throw new Error("Comparison operator [" + operator
                + "] not mapped within QueryFilterGroup."
                + "getComparators()");
        }

        return compareFunction.apply(null, [left, right, caseSensitive]);
    };

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * CONSTRUCTORS
     *----------------------------------------------------------*/

    constructor(filters: QueryFilterEntry[] | null = null) {
        super();

        if (filters) {

            this.filters = filters;
        }
    }

    /*----------------------------------------------------------
     * END OF CONSTRUCTORS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    // -------------------------------------------------
    // static
    // -------------------------------------------------

    public static isBetween(operator: string) {

        return operator == "between" || operator == "notBetween";
    }

    public static toRemoteObject(value: any): any {

        let type = /*(value instanceof ArrayList) || */ Reflection.isArray(value) ? "list" : "string";

        if (type == "list") {

            return value;
        }

        return {
            "class": type,
            "$": value
        };
    }

    public static getComparators = function () {

        var map: any = null;

        return function () {

            /*
             * lazy initialize
             */
            if (!map) {

                map = {
                    startsWith: Strings.startsWith,
                    endsWith: Strings.endsWith,
                    contains: Strings.contains,
                    different: Objects.notEqual,
                    equals: Objects.equal,
                    notEquals: Objects.notEqual,
                    "in": (l: any, r: any, caseSensitive: boolean = true) => {

                        return Arrays.contains(r, l, caseSensitive);
                    },
                    notIn: (l: any, r: any, caseSensitive: boolean = true) => {

                        return !Arrays.contains(r, l, caseSensitive);
                    },
                };
            }

            return map;

        };
    }();

    // -------------------------------------------------
    // internal
    // -------------------------------------------------

    // ----------------------------------
    // handlers
    // ----------------------------------

    private queryFilterGroupChangeHandler(name: string, type: string, value: any, owner: any) {

        this.changed(name, type, value, owner);
    };

    /**
     * Override property change to flag change
     */
    protected propertyChanged(name: string, oldValue: any, newValue: any) {

        super.propertyChanged(name, oldValue, newValue);

        if (oldValue !== newValue) {

            var type = QueryFilterGroup.RESET;

            this.changed(name, type, newValue);

            if (name == QueryFilterGroup.FILTERS) {

                this.filtersChanged(type, newValue);
            }
        }
    };

    // ----------------------------------
    // orion.query.QueryFilterGroup
    // ----------------------------------

    protected changed(name: string | null, type: string, value: any = null, owner: any = null) {

        var args = [name, type, value, owner || this];

        this.dispatch(QueryFilterGroup.ON_CHANGE, args);
    };

    protected filtersChanged(type: string, value: any) {

        this.dispatch(QueryFilterGroup.ON_FILTER, [type, value]);
    }

    // -------------------------------------------------
    // public
    // -------------------------------------------------



    // ----------------------------------
    // match
    // ----------------------------------

    protected generateCode(group: QueryFilterGroup): string {

        let builder: string[] = [];

        return builder.join(" ");
    }

    public generator(): (value: any) => boolean {

        let code = this.generateCode(this);

        let func: any = new Function("value", code);

        return func;
    }

    public match(value: any): boolean {

        var i;
        var aggregator;
        var result = [];

        var and = "and";

        for (i = 0; i < this.filters.length; i++) {

            var filter: any = this.filters[i];

            var allow = true;

            if (filter instanceof QueryFilterGroup) {

                allow = filter.match(value);

            } else {

                var extractedValue = value;

                if (filter.valueFunction) {

                    extractedValue = filter.valueFunction.call(value);

                } else if (filter.field) {

                    extractedValue = E4J.read(value, filter.field);
                }

                /*
                 * compare the extract value to the filter's value using
                 * the defined operator and case sensitive
                 */
                allow = this.filterFunction.call(this,
                    extractedValue, filter.value, filter.operator,
                    filter.caseSensitive);
            }

            result.push(allow);

            if (!Arrays.isLast(this.filters, filter)) {

                /*
                 * by default, we use aggregator AND if there is no defined.
                 */
                aggregator = this.defaultAggregator || and;

                /*
                 * if we have a custom aggregator, use it instead.
                 */
                if (Reflection.isString(this.filters[i + 1])) {

                    aggregator = this.filters[i + 1];

                    /*
                     * make sure to pass on the index to the next element so
                     * we don't pick up on the aggregator again.
                     */
                    i++;
                }

                result.push(aggregator == and ? "&&" : "||");
            }

        }

        let finalResult = true;

        /*
         * when dealing with just one result, simply return it
         */
        if (result.length > 0) {

            finalResult = !!result[0];

            for (let i = 1; i < result.length; i++) {

                let operator = result[i];
                let other: boolean = !!result[i + 1];

                if (operator == and) {

                    finalResult = finalResult && other;
                }
                else {

                    finalResult = finalResult || other;
                }

                i++;
            }

            finalResult = eval(result.join(" "));
        }

        return finalResult;
    }

    // ----------------------------------
    // filter
    // ----------------------------------

    /**
     * Retrieve a filter object based on its field name. If there are more
     * than one filter for the given field, returns the first one.
     * 
     * @param field
     *            {String} the field name
     * 
     * @return {String} filter object containing both field and value and
     *         operator or null if no field is found
     */
    public getFilterByField(field: string): QueryFilter | null {

        for (let i = 0; i < this.filters.length; i++) {

            var filter: any = this.filters[i];

            if (filter.field == field) {

                return filter;
            }
        }

        return null;
    }

    /**
     * Add a new filter constraint to this query to limit the expected
     * result to match the defined criteria.
     * 
     * By default, when no filters are defined, all models are turned but
     * you can filter the result by specifying a search criteria to limit
     * the result.
     * 
     * The operator defines the kind of filter you want to apply. Here is a
     * list of the supported ones:
     * 
     * <ul>
     * <li>greater</li>
     * <li>less</li>
     * <li>greaterOrEquals</li>
     * <li>lessOrEquals </li>
     * <li>different </li>
     * <li>contains</li>
     * <li>doesNotContain</li>
     * <li>equals </li>
     * <li>is </li>
     * <li>isNot </li>
     * <li>between </li>
     * <li>notBetween </li>
     * <li>startsWith</li>
     * <li>endsWith </li>
     * <li>in</li>
     * <li>notIn </li>
     * <li>empty </li>
     * <li>notEmpty </li>
     * <li>null </li>
     * <li>notNull </li>
     * <li>withinNext</li>
     * <li>withinPast</li>
     * </ul>
     * 
     * @param field
     *            {String} the field name
     * 
     * @param value
     *            {any} the field value used to compare
     * 
     * @param operator
     *            {String} the operator to be used (default is "contains").
     * 
     * @param caseSensitive
     *            {Boolean} flag that indicates if the comparison should be
     *            case sensitive. Default to <code>true</code>
     * 
     * @return {orion.query.QueryFilterGroup} self reference
     */
    public addFilter(field: string, value: any, operator: QueryFilterOperator, caseSensitive: boolean = true): QueryFilterGroup {

        let filter: any = null;
        let changed = false;

        for (var i = 0; i < this.filters.length; i++) {

            let f: any = this.filters[i];

            if (f.field == field) {

                filter = f;
                break;
            }
        }

        if (!Objects.isDefined(filter)) {

            filter = {};
            filter.field = field;

            this.filters.push(filter);

            changed = true;
        }

        operator = operator || "contains";
        caseSensitive = Objects.isDefined(caseSensitive) ? caseSensitive
            : caseSensitive !== false;

        changed = changed || (filter.field != field)
            || (filter.value != value) || (filter.operator != operator)
            || (filter.caseSensitive != caseSensitive);

        filter.value = value;
        filter.operator = operator;
        filter.caseSensitive = caseSensitive;

        if (changed) {

            this.changed(QueryFilterGroup.FILTERS, QueryFilterGroup.ADD,
                filter);
            this.filtersChanged(QueryFilterGroup.ADD, filter);
        }

        return this;
    }

    /**
     * Notify the given filter has been updated firing a {@link #ON_FILTER}
     * event.
     * 
     * @param filter
     *            the filter that has been updated
     * 
     * @return {orion.query.QueryFilterGroup} self reference
     */
    public updateFilterObject(filter: QueryFilterEntry): QueryFilterGroup {

        var index = this.filters.indexOf(filter);

        if (index >= 0) {

            this.changed(QueryFilterGroup.FILTERS, QueryFilterGroup.UPDATE, filter);
            this.filtersChanged(QueryFilterGroup.UPDATE, filter);
        }

        return this;
    }

    /**
     * Append an entire query filter to this group of filters
     * 
     * @param filter
     *            {Object} the filter being added
     * 
     * @return {orion.query.QueryFilterGroup} self reference
     */
    public addFilterObject(filter: QueryFilterEntry): QueryFilterGroup {

        let index = this.filters.indexOf(filter);

        if (index < 0) {

            this.filters.push(filter);

            /*
             * bind change handler on filter group instances
             */
            if (filter instanceof QueryFilterGroup) {

                filter.bind(QueryFilterGroup.ON_CHANGE, this.queryFilterGroupChangeHandler);
            }

            this.changed(QueryFilterGroup.FILTERS, QueryFilterGroup.ADD,
                filter);
            this.filtersChanged(QueryFilterGroup.ADD, filter);
        }

        return this;
    }

    /**
     * Append an entire query filter group to this group
     * 
     * @param filter
     *            {orion.query.QueryFilterGroup} the group filter being
     *            added
     * 
     * @return {orion.query.QueryFilterGroup} self reference
     */
    public addFilterGroup(filter: QueryFilterGroup): QueryFilterGroup {

        return this.addFilterObject(filter);
    }

    /**
     * Remove an existing filter based on its reference
     * 
     * @param filter
     *            {Object} the filter being removed
     * 
     * @return {orion.query.QueryFilterGroup} self reference
     */
    public removeFilter(filter: QueryFilterEntry): QueryFilterGroup {

        var index = this.filters.indexOf(filter);

        if (index >= 0) {

            this.filters.splice(index, 1);

            this.changed(QueryFilterGroup.FILTERS, QueryFilterGroup.REMOVE,
                filter);
            this.filtersChanged(QueryFilterGroup.REMOVE, filter);
        }

        return this;
    }

    /**
     * Convert the given filter into a where clause expression object.
     * 
     * @param filter the filter being converted
     * 
     * @param alias the root-level alias in the underlying query
     * 
     * @return where expression and parameters
     */
    public getWhere(filter: QueryFilter, alias?: string): { expression: string, parameters: any } {

        var field = (alias ? alias + "." + filter.field : filter.field);

        switch (filter.operator) {

            case "greater": return {
                expression: field + " > :value ",
                parameters: {
                    value: filter.value
                }
            };
            case "less": return {
                expression: field + " < :value ",
                parameters: {
                    value: filter.value
                }
            };
            case "greaterOrEquals": return {
                expression: field + " >= :value ",
                parameters: {
                    value: filter.value
                }
            };
            case "lessOrEquals": return {
                expression: field + " <= :value ",
                parameters: {
                    value: filter.value
                }
            };
            case "different": return {
                expression: field + " <> :value ",
                parameters: {
                    value: filter.value
                }
            };
            case "contains": return {
                expression: field + " like '%" + filter.value + "%'",
                parameters: {
                }
            };
            case "doesNotContain": return {
                expression: field + " not like '%" + filter.value + "%'",
                parameters: {
                }
            };
            case "equals": return {
                expression: field + " = :value",
                parameters: {
                    value: filter.value
                }
            };
            case "notEquals": return {
                expression: field + " != :value",
                parameters: {
                    value: filter.value
                }
            };
            case "is": return {
                expression: field + " i :value",
                parameters: {
                    value: filter.value
                }
            };
            case "isNot": return {
                expression: field + " is not :value",
                parameters: {
                    value: filter.value
                }
            };
            case "between": return {
                expression: field + " between :value1 and :value2",
                parameters: {
                    value1: filter.value[0],
                    value2: filter.value[1]
                }
            };
            case "notBetween": return {
                expression: field + " not between :value1 and :value2",
                parameters: {
                    value1: filter.value[0],
                    value2: filter.value[1]
                }
            };
            case "startsWith": return {
                expression: field + " like '" + filter.value + "%'",
                parameters: {
                }
            };
            case "endsWith": return {
                expression: field + " like '%" + filter.value + "'",
                parameters: {
                }
            };
            case "in": return {
                expression: field + " in " + (Reflection.isArray(filter.value) ? filter.value.map((item: any) => {
                    if (Reflection.isNumber(item)) {
                        return item;
                    }

                    return "'" + item + "'";
                }).join(",") : filter.value),
                parameters: {
                }
            };
            case "notIn": return {
                expression: field + " not in " + (Reflection.isArray(filter.value) ? filter.value.map((item: any) => {
                    if (Reflection.isNumber(item)) {
                        return item;
                    }

                    return "'" + item + "'";
                }).join(",") : filter.value),
                parameters: {
                }
            };
            case "empty": return {
                expression: field + " = ''",
                parameters: {
                }
            };
            case "notEmpty": return {
                expression: field + " <> ''",
                parameters: {
                }
            };
            case "null": return {
                expression: field + " is null",
                parameters: {
                }
            };
            case "notNull": return {
                expression: field + " is not null",
                parameters: {
                }
            };
            case "withinNext":
            case "withinPast":
            default:
                throw "Operator not supported: " + filter.operator;
        }
    }

    /**
     * Convert the currently defined filters into hash objects that map the
     * structure expected by the back-end of a Orion's QueryFilterGroup
     * 
     * @return {Object} object containing array of filters and other
     *         operators
     */
    public filtersToObject() {

        var object: any = {
            filters: []
        };

        if (this.defaultAggregator) {
            object.defaultAggregator = this.defaultAggregator;
        }

        for (var i = 0; i < this.filters.length; i++) {

            var filter: any = this.filters[i];

            if (filter instanceof QueryFilterGroup) {

                var group = filter.filtersToObject();

                if (group.filters && group.filters.length > 0) {

                    object.filters.push(Objects.extend({
                        "class": "queryFilterGroup"
                    }, group));
                }

            } else if (filter.operator && filter.field) {

                object.filters.push({
                    field: filter.field,
                    operator: filter.operator,
                    value: QueryFilterGroup.toRemoteObject(filter.value)
                });
            }
        }

        /*
         * remove empty values
         */
        if (object.filters.length === 0) {
            delete object.filters;
        }

        return object;
    }

    /**
     * Fill up this query filter group based on the declared filters within
     * the given hash object.
     * 
     * @param object
     *            the object containing the generic filters
     */
    public filtersFromObject(object: any): QueryFilterGroup {

        Arrays.clear(this.filters);

        this.defaultAggregator = object.defaultAggregator;

        if (object.filters) {

            for (var i = 0; i < object.filters.length; i++) {

                var filter = object.filters[i];

                if (filter["class"] == "queryFilterGroup") {

                    var group = new QueryFilterGroup();

                    group.filtersFromObject(filter);

                    this.addFilterGroup(group);

                } else {

                    this.addFilter(filter.field, filter.value.$,
                        filter.operator);
                }
            }
        }

        return this;
    }

    // -------------------------------------------------
    // GETS AND SETS
    // -------------------------------------------------

    // ----------------------------------
    // filters
    // ----------------------------------

    /**
     * Storage for property filters
     * 
     * @type Array
     * 
     * @default []
     */
    public _filters: QueryFilterEntry[] = [];

    /**
     * List of filters currently associated withi this query filter group.
     * 
     * @return filters
     */
    public get filters(): QueryFilterEntry[] {
        return this._filters;
    }

    /**
     * Custom setter used to massage the given set filters translating
     * nested arrays as QueryFilterGroup instances.
     * 
     * @param value
     *            the new set of filters
     */
    public set filters(value: QueryFilterEntry[]) {

        this._filters = value;

        /*
         * translate nested arrays as QueryFilterGroup instances
         */
        Objects.each(value, function (i: number, item: any) {

            if (Reflection.isArray(item)) {

                item = value[i] = new QueryFilterGroup(item);
            }

            /*
             * bind change handler on filter group instances
             */
            if (item instanceof QueryFilterGroup) {

                item.bind(QueryFilterGroup.ON_CHANGE, this.queryFilterGroupChangeHandler);
            }
        });
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}