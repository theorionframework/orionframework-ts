import { IResultSet } from "./IResultSet";

/**
 * Wrapper for working with a database transaction
 * 
 * @author orionframework
 * 
 * 
 */
export interface ITransaction {

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    /**
     * Run the given SQL statement passing the given set of arguments in the database.
     */
    executeSql(sql: string, args: any[]): Promise<IResultSet>;


    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}
