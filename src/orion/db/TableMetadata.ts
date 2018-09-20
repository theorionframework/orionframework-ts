import { ColumnMetadata } from './ColumnMetadata';

/**
 * Metadata that describes a database table.
 * 
 * @author orionframework
 * 
 * 
 */
export interface TableMetadata{

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/
    
     /**
      * The name fo the table.
      */
    tableName:string;

    /**
     * List of all columns defined in this table.
     */
    columns:ColumnMetadata[];
    
    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

}