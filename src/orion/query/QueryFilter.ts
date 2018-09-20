import { QueryFilterOperator } from "./QueryFilterOperator";
import { QueryFunction } from "./QueryFunction";

/**
 * Interface that encapsulates what a query filter object looks like
 * 
 * @author orionframework
 * 
 * 
 */
export interface QueryFilter {

    /**
     * The field being referenced in this filter
     */
    field: string;

    /**
     * The value being set to the given field, if any
     */
    value?: any;

    /**
     * The function used to extract the value instead (used for data binding).
     */
    valueFunction?: Function;

    /**
     * The function used in this filter. If a field is provided, then the field is compared with 
     * the result of given the function. Otherwise the value is compared instead.
     */
    function?:QueryFunction;

    /**
     * The operator used in the comparison
     */
    operator: QueryFilterOperator;

    /** 
     *  Rather case-sensitive should be used within the query or not
     */
    caseSensitive?: boolean;
}