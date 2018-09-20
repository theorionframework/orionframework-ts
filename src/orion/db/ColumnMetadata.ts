/**
 * Metadata that describes a database table's column definition.
 * 
 * @author orionframework
 * 
 * 
 */
export interface ColumnMetadata {

  /*----------------------------------------------------------
   * ATTRIBUTES
   *----------------------------------------------------------*/

  /**
   * The name of the model's property this column is mapped to.
   */
  propertyName: string;

  /**
   * The database column's type
   */
  type: string;

  /**
   * Indicates if this column is a primary key.
   */
  isPrimary: boolean;

  /**
   * Indicates if this column is generated (auto increment or generated other way).
   */
  isGenerated: boolean;

  /**
   * Default database value.
   */
  default?: any;

  /**
   * Database name in the database without embedded prefixes applied.
   */
  databaseNameWithoutPrefixes: string;

  /**
   * Complete column name in the database including its embedded prefixes.
   */
  databaseName: string;

  /*----------------------------------------------------------
   * END OF ATTRIBUTES
   *----------------------------------------------------------*/

}