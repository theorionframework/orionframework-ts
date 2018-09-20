import { QuerySortOrder } from "./QuerySortOrder";
import { QueryFunction } from "./QueryFunction";

/**
 * Declar type for how a query sort should be mapped.
 * 
 * @author orionframework
 * 
 * 
 */
export interface QuerySort {

    field: string | Function;
    order: QuerySortOrder;
    function?: QueryFunction;
}