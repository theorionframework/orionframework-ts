import { AbstractDatabase } from './../AbstractDatabase';
import { SqlStatement } from './../SqlStatement';
import { SqlJsTransaction } from './SqlJsTransaction';
import { ITransaction } from './../ITransaction';
import { IDatabase } from './../IDatabase';
import { TransactionOptions } from '../TransactionOptions';

/**
 * Implementation of IDatabase that offers wrapper api around Sql.js databases.
 * 
 * @author orionframework
 * 
 * 
 */
export class SqlJsDatabase extends AbstractDatabase implements IDatabase {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * The database connection;
     */
    protected database: any;

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * CONSTRUCTORS
     *----------------------------------------------------------*/

    /**
     * Constructor
     * 
     * @param database 
     */
    constructor(database: any) {
        super();

        this.database = database;
    }

    /*----------------------------------------------------------
     * END OF CONSTRUCTORS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    public transaction(): Promise<ITransaction> {

        return Promise.resolve(new SqlJsTransaction(this.database));
    }

    public async executeBatch(statements: SqlStatement[], options?: TransactionOptions): Promise<void> {

        let individualStatements = options ? options.individualStatements : false;

        let tx = await this.transaction();

        for (let statement of statements) {

            let promise = tx.executeSql(statement[0], statement[1]);

            if (individualStatements) {
                await promise;
            }
        }
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/

}