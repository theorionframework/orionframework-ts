import { QuerySort } from "./QuerySort";
import { QueryJoin } from "./QueryJoin";
import { QueryPager } from "./QueryPager";
import { QueryFilterEntry } from "./QueryFilterEntry";

/**
 * Object that maps the constraints of a query. It allows:
 * 
 * <p>
 * Definition of requested fields included in this Query;<br>
 * Set of filters to limit the result to a set of constraints;<br>
 * Group the Query Result by a set of fields;<br>
 * Sort the Query Result by a set of fields;<br>
 * Page the Query Result in order to have limited result;
 * </p>
 * 
 * @author orionframework
 * 
 * 
 */
export interface IQuery {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    alias?: string

    fields?: string[];

    sorts?: QuerySort[];

    joins?: QueryJoin[];

    groups?: string[];

    filters?: QueryFilterEntry[];

    pager?: QueryPager;

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

}