import { IQuery } from "./IQuery";
import { QueryFilterGroup } from "./QueryFilterGroup";
import { QueryFilterOperator } from "./QueryFilterOperator";
import { QuerySort } from "./QuerySort";
import { QuerySortOrder } from "./QuerySortOrder";
import { QueryPager } from "./QueryPager";
import { Objects } from "../utils/Objects";
import { Arrays } from "../utils/Arrays";
import { URLs } from "../utils/URLs";
import { QueryJoin } from "./QueryJoin";

/**
 * Default implementation of IQuery
 * 
 * @augments orion.query.QueryFilterGroup
 * 
 * @class
 * @name orion.query.Query
 * 
 * @author orionframework
 * 
 * 
 */
export class Query extends QueryFilterGroup implements IQuery {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /**
     * Sorting order used to specify ascending comparison
     * 
     * @type String
     */
    public static ASC = "asc";

    /**
     * Sorting order used to specify descending comparison
     * 
     * @type String
     */
    public static DESC = "desc";

    // ----------------------------------
    // type
    // ----------------------------------

    public static RESET = "reset";

    public static REFRESH = "refresh";

    public static FIELDS = "fields";

    public static SORTS = "sorts";

    public static JOINS = "joins";

    public static GROUPS = "groups";

    public static PAGER = "pager";

    // ----------------------------------
    // EVENTS
    // ----------------------------------

    /**
     * Event dispatched whenever the sorting fields under this query change.
     */
    public static readonly ON_SORT = "onSort";

    /**
     * Event dispatched whenever the joining fields under this query change.
     */
    public static readonly ON_JOIN = "onJoin";

    /**
     * Event dispatched whenever any of the grouping fields change.
     */
    public static readonly ON_GROUP = "onGroup";

    /**
     * Event dispatched whenever any of the fields change.
     */
    public static readonly ON_FIELD = "onField";

    /**
     * Event dispatched whenever any of the pagination fields such start or
     * max change.
     */
    public static readonly ON_PAGE = "onPage";

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/


    /**
     * The query's root alias
     */
    public alias: string;

    /**
     * Retrieve the list of defined fields within this query.
     * 
     * @type Array
     */
    public fields: string[] = [];

    /**
     * Retrieve the list of defined sorted fields within this query.
     * 
     * @type Array
     */
    public sorts: QuerySort[] = [];
    /**
     * Retrieve the list of defined joined fields within this query.
     * 
     * @type Array
     */
    public joins: QueryJoin[] = [];

    /**
     * Retrieve the list of defined grouped fields within this query.
     * 
     * @type Array
     */
    public groups: string[] = [];

    /**
     * The pager object properties
     * 
     * @type Object
     */
    public pager: QueryPager = {};

    /**
     * The meta data generated for this query (loading time, factory time,
     * etc.)
     * 
     * @type Object
     */
    public metadata: any = {};

    /**
     * Function used to parse the content of this Query to an Object. This
     * function is used by {@link #toObject()} while converting the content
     * of this query to be sent to a remote server as parameters.
     * 
     * @return {Object} object
     */
    public serializerFunction: Function = () => {

        var pager = this.pager;

        var object = this.filtersToObject();

        object.fields = [];
        object.sorts = [];
        object.joins = [];
        object.groups = [];

        this.fields.forEach((field: string) => {

            if (field) {

                object.fields.push({
                    name: field
                });
            }
        });

        this.sorts.forEach((sort: QuerySort) => {

            if (sort.field && sort.order) {

                object.sorts.push(sort);
            }
        });

        this.joins.forEach((join: QueryJoin) => {

            if (join.field && join.alias) {

                object.joins.push(join);
            }
        });

        this.groups.forEach((group: string) => {

            if (group) {

                object.groups.push(group);
            }
        });

        if (pager && (pager.max || pager.first)) {

            object.pager = {
                first: pager.first,
                max: pager.max
            };

            if (pager.total) {
                object.pager.total = pager.total;
            }
        }

        if (this.alias) {
            object.alias = this.alias;
        }

        /*
         * remove empty values
         */
        if (object.fields.length === 0) {
            delete object.fields;
        }
        if (object.sorts.length === 0) {
            delete object.sorts;
        }
        if (object.joins.length === 0) {
            delete object.joins;
        }
        if (object.groups.length === 0) {
            delete object.groups;
        }

        return object;
    };

    public parserFunction: Function = function (object: any) {

        /*
         * parse from String
         */
        if (typeof object == "string") {
            object = JSON.parse(object);
        }

        var query = object;

        this.filtersFromObject(query);

        if (query.fields) {

            Arrays.clear(this.fields);

            for (let i = 0; i < query.fields.length; i++) {

                var field = query.fields[i];

                this.addField(field.name);
            }
        }

        if (query.sorts) {

            Arrays.clear(this.sorts);

            for (let i = 0; i < query.sorts.length; i++) {

                var sort = query.sorts[i];

                this.addSort(sort.field, sort.order);
            }
        }

        if (query.joins) {

            Arrays.clear(this.sorts);

            for (let i = 0; i < query.joins.length; i++) {

                var join = query.joins[i];

                this.addJoin(join.field, join.alias);
            }
        }

        if (query.groups) {

            Arrays.clear(this.groups);

            for (let i = 0; i < query.groups.length; i++) {

                var group = query.groups[i];

                this.addGroup(group.field);
            }
        }

        if (query.pager) {

            this.pager.first = query.pager.first;
            this.pager.pager.max = query.pager.max;
        }

        if (query.alias) {

            this.alias = query.alias;
        }

        return this;

    };

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * CONSTRUCTORS
     *----------------------------------------------------------*/

    /**
     * Constructor
     * 
     * @param IQuery 
     */
    public constructor(query?: IQuery) {

        super(query ? query.filters : null);

        if (query) {

            if (query.alias) {
                this.alias = query.alias;
            }

            if (query.fields) {
                this.fields = query.fields;
            }

            if (query.sorts) {
                this.sorts = query.sorts;
            }

            if (query.joins) {
                this.joins = query.joins;
            }

            if (query.groups) {
                this.groups = query.groups;
            }

            if (query.pager) {
                this.pager = query.pager;
            }
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

    // ----------------------------------
    // serializer & parser
    // ----------------------------------

    /**
     * Parser function used to translate the content of this Query to an
     * object.
     * 
     * @param query
     *            {orion.query.Query} the query instance we are converting.
     *            If not defined, the instance attached to the caller is
     *            used instead (compatible with
     *            {@link orion.query.Query#serializerFunction})
     * 
     * @return {Object} this query's content converted to an Object based on
     *         a quick query
     */
    public static toQuickQuery(query: Query) {

        query = query || this as any;

        var pager = query.pager;

        let filters: any[] = [];
        let sorts: any[] = [];

        var object: any = {};

        query.filters.forEach((filter: any) => {

            if (filter && filter.value) {

                if (!filter.field) {

                    filters.push(":text");

                } else {

                    filters.push(":" + filter.field);
                }

                filters.push(filter.value);
            }
        });

        query.sorts.forEach((sort: QuerySort) => {

            if (sort.field && sort.order) {

                sorts.push(sort.field + "-" + sort.order);
            }
        });

        if (sorts.length > 0) {

            filters.push(":sorted-by");
            filters.push(sorts.join(","));
        }

        object.text = filters.join(" ");

        if (Objects.isDefined(pager.first)) {
            object.first = pager.first;
        }

        if (Objects.isDefined(pager.max)) {
            object.max = pager.max;
        }

        if (Objects.isDefined(pager.total)) {
            object.total = pager.total;
        }

        if (query.alias) {
            object.alias = query.alias;
        }

        return object;
    }

    /**
     * Parser function used to translate the object representing a quick
     * query (once obtained via {link #toQuickQUery()}) translating its
     * represented values into the given query.
     * 
     * @param object
     *            {Object} the object representing the quick query.
     * 
     * @param query
     *            {orion.query.Query} the query instance we are converting.
     *            If not defined, the instance attached to the caller is
     *            used instead (compatible with
     *            {@link orion.query.Query#serializerFunction})
     * 
     * @return {Object} this query's content converted to an Object based on
     *         a quick query
     */
    public static fromQuickQuery(object: any, query: Query) {

        // @todo pending implementation
    }

    /** 
    * Produces a query filter group object with a new filter for each given 
    * field name filtering by the same value/operator. 
    * 
    * @param names 
    *            {Array} the set of fields being filtered 
    * 
    * @param value 
    *            {String} the value being used in the filter 
    * 
    * @param operator 
    *            {String} the operator being used ("contains" if not 
    *            defined). 
    * 
    * @return {Object} query filter group object 
    */
    public static combinedFieldFilterGroup(names: string[], value: any, operator: QueryFilterOperator = "contains") {

        let filters: any[] = [];

        for (let name of names) {

            filters.push({
                operator: operator,
                value: value,
                field: name
            })
        }

        return {
            "class": "queryFilterGroup",
            "defaultAggregator": "or",
            "filters": filters
        };
    }

    // -------------------------------------------------
    // protected
    // -------------------------------------------------

    /**
     * Override property change to flag change
     * 
     * @private
     */
    protected propertyChanged(name: string, oldValue: any, newValue: any) {

        super.propertyChanged(name, oldValue, newValue);

        if (oldValue !== newValue) {

            var type = Query.RESET;

            if (name == Query.SORTS) {

                this.sortsChanged(type, newValue);

            } else if (name == Query.JOINS) {

                this.joinsChanged(type, newValue);

            } else if (name == Query.FIELDS) {

                this.fieldsChanged(type, newValue);

            } else if (name == Query.GROUPS) {

                this.groupsChanged(type, newValue);

            } else if (name == Query.PAGER) {

                this.pageChanged(type, newValue);
            }
        }
    }

    protected fieldsChanged(type: string, value: any) {

        this.dispatch(Query.ON_FIELD, [type, value]);
    }

    protected sortsChanged(type: string, value: any) {

        this.dispatch(Query.ON_SORT, [type, value]);
    }

    protected joinsChanged(type: string, value: any) {

        this.dispatch(Query.ON_JOIN, [type, value]);
    }

    protected groupsChanged(type: string, value: any) {

        this.dispatch(Query.ON_GROUP, [type, value]);
    }

    protected pageChanged(type: string, value: any) {

        this.dispatch(Query.ON_PAGE, [type, value]);
    }

    // -------------------------------------------------
    // public
    // -------------------------------------------------


    // ----------------------------------
    // page
    // ----------------------------------

    /**
     * Calculate the number of pages we currently have based on the total
     * number of records divided by the maximum number of records requested
     * per page
     * 
     * @return page length
     */
    public getPages() {

        return Math.ceil((this.pager.total || 0) / (this.pager.max || 0));
    }

    /**
     * Retrieve the current page we are displaying
     * 
     * @return current page index
     */
    public getCurrentPage() {

        return Math.ceil((this.pager.first || 0) / (this.pager.max || 0));
    }

    // ----------------------------------
    // fields
    // ----------------------------------

    /**
     * Add a new field name to be retrieved by this query.
     * 
     * By default, if no fields within a query, all shall be returned.
     * Although, you can save bandwidth by specifying what fields you wish
     * to retrieve instead (of course if you do have access to them).
     * 
     * @param ...names
     *            the new fields being added
     * 
     * @return query instance
     */
    public addField(...names: string[]): Query {

        names.forEach(name => {

            if (!this.hasField(name)) {

                this.fields.push(name);

                this.changed(Query.FIELDS, Query.ADD, name);

                this.fieldsChanged(Query.ADD, name);
            }
        });

        return this;
    }

    /**
     * Remove a field name from the defined list of fields. Removing a field
     * prevent it from being returned within the query response.
     * 
     * By default, if no fields within a query, all shall be returned.
     * Although, you can save bandwidth by specifying what fields you wish
     * to retrieve instead (of course if you do have access to them).
     * 
     * @param name
     *            the field name to be removed
     * 
     * @return query instance
     */
    public removeField(...names: string[]) {

        names.forEach(name => {

            if (this.hasField(name)) {

                this.fields.splice(this.fields.indexOf(name), 1);

                this.changed(Query.FIELDS, Query.REMOVE, name);

                this.fieldsChanged(Query.REMOVE, name);
            }
        });

        return this;
    }

    /**
     * Check if the given field name exists within the list of declared
     * fields.
     * 
     * @param name
     *            the field name we are looking for
     * 
     * @return true if contains the field, false otherwise
     */
    public hasField(name: string): boolean {

        return this.fields.indexOf(name) >= 0;
    }

    // ----------------------------------
    // sort
    // ----------------------------------

    /**
     * Retrieve a sort object based on its field
     * 
     * @param field
     *            the field name
     * 
     * @return sort object containing both field and order of null if no
     *         sort is found
     */
    public getSort(field: string): QuerySort | null {

        for (var i = 0; i < this.sorts.length; i++) {

            var sort = this.sorts[i];

            if (sort.field == field) {

                return sort;
            }
        }

        return null;
    }

    /**
     * Add a new sort field to this Query. By default, all returned models
     * are unsorted being on the order they were created. By specifying a
     * sort you can let the back-end know how to order the returned models.
     * 
     * @param field
     *            {String} the field name you want the result sorted by
     * 
     * @param order
     *            {String} either {@link #ASC} (from ascending) or
     *            {@link #DESC} (from descending)
     * 
     * @return query instance
     */
    public addSort(field: string, order: QuerySortOrder): Query {

        var sort: any = null;
        var changed = false;
        var type = Query.ADD;

        for (var i = 0; i < this.sorts.length; i++) {

            if (this.sorts[i].field == field) {

                sort = this.sorts[i];
                type = Query.UPDATE;

                break;
            }
        }

        if (!Objects.isDefined(sort)) {

            sort = {};
            sort.field = field;

            this.sorts.push(sort);

            changed = true;
        }

        changed = changed || sort.order != order;

        sort.order = order;

        if (changed) {

            this.changed(Query.SORTS, type, sort);
            this.sortsChanged(type, sort);
        }

        return this;
    }

    /**
     * Append an entire query sort to this query
     * 
     * @param sort
     *            {Object} the sort being added
     * 
     * @return {orion.query.Query} this reference
     */
    public addSortObject(sort: QuerySort): Query {

        var index = this.sorts.indexOf(sort);

        if (index < 0) {

            this.sorts.push(sort);

            this.changed(Query.FILTERS, Query.ADD, sort);
            this.sortsChanged(Query.ADD, sort);
        }

        return this;
    }

    /**
     * Notify the given sort has been updated firing a {@link #ON_SORT}
     * event.
     * 
     * @param sort
     *            {Object} the sort that has been updated
     * 
     * @return {orion.query.Query} this reference
     */
    public updateSortObject(sort: QuerySort): Query {

        var index = this.sorts.indexOf(sort);

        if (index >= 0) {

            this.changed(Query.SORTS, Query.UPDATE, sort);
            this.sortsChanged(Query.UPDATE, sort);
        }

        return this;

    }

    /**
     * Removes an existing sort object from this query
     * 
     * @param sort
     *            the sort object being removed
     */
    public removeSort(sort: QuerySort): Query {

        var index = this.sorts.indexOf(sort);

        if (index >= 0) {

            this.sorts.splice(index, 1);

            this.changed(Query.SORTS, Query.REMOVE, sort);
            this.sortsChanged(Query.REMOVE, sort);
        }

        return this;
    }

    // ----------------------------------
    // join
    // ----------------------------------

    /**
     * Check if the given field name exists within the list of declared
     * joins.
     * 
     * @param field
     *            the join's field name we are looking for
     * 
     * @return true if contains the field as a join, false otherwise
     */
    public hasJoin(field: string): boolean {

        return this.getJoin(field) != null;
    }

    /**
     * Retrieve a join object based on its field
     * 
     * @param field
     *            the field name
     * 
     * @return join object containing both field and order of null if no
     *         join is found
     */
    public getJoin(field: string): QueryJoin | null {

        for (var i = 0; i < this.joins.length; i++) {

            var join = this.joins[i];

            if (join.field == field) {

                return join;
            }
        }

        return null;
    }

    /**
     * Add a new join field to this Query.
     * 
     * @param field
     *            {String} the field name you want the result sorted by
     * 
     * @param alias
     *            {String} either {@link #ASC} (from ascending) or
     *            {@link #DESC} (from descending)
     * 
     * @return query instance
     */
    public addJoin(field: string, alias: string): Query {

        var join: any = null;
        var changed = false;
        var type: string = Query.ADD;

        for (var i = 0; i < this.joins.length; i++) {

            if (this.joins[i].field == field) {

                join = this.joins[i];
                type = Query.UPDATE;

                break;
            }
        }

        if (!Objects.isDefined(join)) {

            join = {};
            join.field = field;

            this.joins.push(join);

            changed = true;
        }

        changed = changed || join.alias != alias;

        join.alias = alias;

        if (changed) {

            this.changed(Query.JOINS, type, join);
            this.joinsChanged(type, join);
        }

        return this;
    }

    /**
     * Append an entire query join to this query
     * 
     * @param join
     *            {Object} the join being added
     * 
     * @return {orion.query.Query} this reference
     */
    public addJoinObject(join: QueryJoin): Query {

        var index = this.joins.indexOf(join);

        if (index < 0) {

            this.joins.push(join);

            this.changed(Query.FILTERS, Query.ADD, join);
            this.joinsChanged(Query.ADD, join);
        }

        return this;
    }

    /**
     * Notify the given join has been updated firing a {@link #ON_JOIN}
     * event.
     * 
     * @param join
     *            {Object} the join that has been updated
     * 
     * @return {orion.query.Query} this reference
     */
    public updateJoinObject(join: QueryJoin): Query {

        var index = this.joins.indexOf(join);

        if (index >= 0) {

            this.changed(Query.JOINS, Query.UPDATE, join);
            this.joinsChanged(Query.UPDATE, join);
        }

        return this;

    }

    /**
     * Removes an existing join object from this query
     * 
     * @param join
     *            the join object being removed
     */
    public removeJoin(join: QueryJoin): Query {

        var index = this.joins.indexOf(join);

        if (index >= 0) {

            this.joins.splice(index, 1);

            this.changed(Query.JOINS, Query.REMOVE, join);
            this.joinsChanged(Query.REMOVE, join);
        }

        return this;
    }

    // ----------------------------------
    // group
    // ----------------------------------

    /**
     * Add a new group field to this Query. By default, all returned models
     * are not grouped. By specifying a group field you can let the back-end
     * know to not return duplicated records in a field.
     * 
     * @param ...names
     *            the field name you want the result sorted by
     * 
     * @return query instance
     */
    public addGroup(...names: string[]): Query {

        names.forEach(name => {

            if (!this.hasField(name)) {

                this.groups.push(name);

                this.changed(Query.GROUPS, Query.ADD, name);

                this.groupsChanged(Query.ADD, name);
            }
        });

        return this;
    }

    /**
     * Removes an existing group object from this query
     * 
     * @param sort
     *            the group object being removed
     */
    public removeGroup(...names: string[]) {

        names.forEach(name => {

            if (this.hasField(name)) {

                this.groups.splice(this.groups.indexOf(name), 1);

                this.changed(Query.GROUPS, Query.REMOVE, name);

                this.groupsChanged(Query.REMOVE, name);
            }
        });

        return this;
    }

    /**
     * Update the current page to the given one
     * 
     * @param index
     *            the new page index
     * 
     * @return the query instance
     */
    public page(page: number) {

        this.pager.first = page;

        this.changed(Query.PAGER, Query.RESET, page);
        this.pageChanged(Query.RESET, page);

        return this;
    }

    /**
     * Update the current page to the given index
     * 
     * @param index
     *            the new page index
     * 
     * @return the query instance
     */
    public setPageIndex(index: number) {

        return this.page(index * (this.pager.max || 0));
    }

    /**
     * Reset the Query filters, sorts and pager forcing the query to return
     * all models (paged of course) in the original order and within the
     * first page.
     * 
     * @return the query instance
     */
    public reset() {

        var filters = this.filters;
        var sorts = this.sorts;
        var joins = this.joins;
        var groups = this.groups;
        var page = this.pager.first;

        if (!Arrays.isEmpty(filters)) {

            this.filters = [];

            this.filtersChanged(Query.RESET, filters);
        }

        if (!Arrays.isEmpty(sorts)) {

            this.sorts = [];

            this.sortsChanged(Query.RESET, sorts);
        }

        if (!Arrays.isEmpty(joins)) {

            this.joins = [];

            this.joinsChanged(Query.RESET, joins);
        }

        if (!Arrays.isEmpty(groups)) {

            this.groups = [];

            this.groupsChanged(Query.RESET, groups);
        }

        this.pager.total = 0;
        this.pager.first = 0;

        if (page) {

            this.pageChanged(Query.RESET, page);
        }

        this.changed(null, Query.RESET);

        return this;
    }

    /**
     * Parse this Query instance generating a JavaScript Object compatible
     * with the IQuery back-end component which can be serialized to JSON
     * and send to the server side to look for this. The format is defined
     * by the currently defined {@link #serializerFunction}
     * 
     * @return this query's filters, fields, sorts and pager into a Query
     *         back-end component
     */
    public toObject() {

        return this.serializerFunction.call(this);
    }

    public toJSON() {

        return this.toObject();
    }

    /**
     * Fills up this query based on the contents of the given object
     * according to the currently set {@link #parserFunction}.
     * 
     * @param object
     *            the object being evaluated (if String is automatically
     *            interpreted as a JSON)
     */
    public fromObject(object: any) {

        return this.parserFunction.call(this, object);
    }

    /**
     * Parse the given hash query string adding filters and sort fields to
     * this Query component. This method can be used with the result of
     * <code>toHash()</code> method to restore the query filters/sorts
     * from the browser's history.
     * 
     * The DataGrid for an instance utilizes of an Query component to
     * control the filters applied to its header and uses both fromHash()
     * and toHash() to restore the query state when working with history
     * enabled.
     * 
     * @see DataGrid
     * 
     * @param hash
     *            the query string hash
     */
    public fromHash(hash: any) {

        var object = URLs.fromQueryString(hash);

        Objects.each(hash, function (name: string, value: any) {

            var field = null;

            if (name.indexOf("filter.") === 0) {

                field = name.substring("filter.".length);

                this.addFilter(field, value, "contains");

            } else if (name.indexOf("sort.") === 0) {

                field = name.substring("sort.".length);

                this.addSort(field, value);

            } else if (name.indexOf("join.") === 0) {

                field = name.substring("join.".length);

                this.addJoin(field, value);

            } else if (name.indexOf("pager.") === 0) {

                field = name.substring("pager.".length);

                this.pager[field] = Number(value);
            }
        }, this);

        if (object.alias) {

            this.alias
        }

        if (object.fields) {

            this.fields = object.fields.split(",");
        }
    }

    /**
     * Parses the current filters and sort fields to a query string that can
     * represent the filters and sort fields in this query and can be used
     * within the browser history.
     * 
     * The result of this method can be loaded by the Query component within
     * method fromHash().
     * 
     * @see #fromHash()
     * 
     * @return query string with current filters and fields
     */
    public toHash(asString: boolean = true): string {

        var hash: any = {};
        var i = 0;

        for (i = 0; i < this.filters.length; i++) {

            var filter: any = this.filters[i];

            if (filter.value) {
                hash["filter." + filter.field] = filter.value;
            }
        }

        for (i = 0; i < this.sorts.length; i++) {

            var sort = this.sorts[i];

            if (sort.order) {
                hash["sort." + sort.field] = sort.order;
            }
        }

        for (i = 0; i < this.joins.length; i++) {

            var join = this.joins[i];

            if (join.alias) {
                hash["join." + join.field] = join.alias;
            }
        }

        if (this.alias) {
            hash.alias = this.alias;
        }

        if (this.pager) {

            if (Objects.isDefined(this.pager.first)) {
                hash["pager.first"] = this.pager.first;
            }
            if (Objects.isDefined(this.pager.max)) {
                hash["pager.max"] = this.pager.max;
            }
        }

        if (Arrays.isEmpty(this.fields)) {
            hash.fields = this.fields.join(",");
        }

        /*
         * return hash if not requesting hash string
         */
        if (!asString) {
            return hash;
        }

        return URLs.toQueryString(hash);
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/

}