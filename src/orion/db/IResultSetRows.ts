/**
 * Interface that maps the rows of a SQL query ResultSet.
 * 
 * @author orionframework
 */
export interface IResultSetRows {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * The number of records in this result set.
     */
    length: number;

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    /**
     * Retrieve an object stored within the given position.
     * 
     * @param index
     * 
     * @return object on the given index or null it out of range
     */
    item(index: number): any;

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/
}