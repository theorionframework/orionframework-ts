import { Dictionary } from './../common/Dictionary';
import { TableMetadata } from './TableMetadata';
import { TransactionOptions } from './TransactionOptions';
import { SqlStatement } from './SqlStatement';
import { ITransaction } from './ITransaction';

/**
 * Wrapper for working with a database container.
 * 
 * @author orionframework
 * 
 * 
 */
export interface IDatabase {

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    /**
     * Run a given set of code as a transaction.
     */
    transaction(): Promise<ITransaction>;

    /**
     * Execute the given set of statements in batch mode.
     */
    executeBatch(statements: SqlStatement[], options?: TransactionOptions): Promise<void>;

    // -------------------------------------------------
    // CRUD
    // -------------------------------------------------

    /**
     * Execute a insert statement against the given entity/entities using the given metadata object to generate the SQL statement.
     */
    insert(metadata: TableMetadata, entities: Dictionary | Dictionary[], options?: TransactionOptions): Promise<void>;

    /**
     * Execute an update statement against the given entity/entities using the given metadata object to generate the SQL statement.
     */
    update(metadata: TableMetadata, entities: Dictionary | Dictionary[], options?: TransactionOptions): Promise<void>;

    /**
     * Execute an update statement against the given entity/entities using the given metadata object to generate the SQL statement.
     */
    delete(metadata: TableMetadata, entities: Dictionary | Dictionary[], options?: TransactionOptions): Promise<void>;

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}
