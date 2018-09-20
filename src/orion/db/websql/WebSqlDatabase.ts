import { AbstractDatabase } from './../AbstractDatabase';
import { SqlStatement } from './../SqlStatement';
import { WebSqlTransaction } from './WebSqlTransaction';
import { ITransaction } from './../ITransaction';
import { IDatabase } from './../IDatabase';
import { TransactionOptions } from '../TransactionOptions';

/**
 * Implementation of IDatabase that offers wrapper api around Websql databases.
 * 
 * @author orionframework
 * 
 * 
 */
export class WebSqlDatabase extends AbstractDatabase implements IDatabase {

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

        return new Promise((resolve, reject) => {

            this.database.transaction((tx: any) => {

                resolve(new WebSqlTransaction(tx));

            }, (error: any) => {

                reject(error);
            });
        });
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