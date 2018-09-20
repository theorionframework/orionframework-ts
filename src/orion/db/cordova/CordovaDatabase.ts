import { AbstractDatabase } from './../AbstractDatabase';
import { SqlStatement } from './../SqlStatement';
import { CordovaTransaction } from './CordovaTransaction';
import { ITransaction } from './../ITransaction';
import { IDatabase } from './../IDatabase';
import { TransactionOptions } from '../TransactionOptions';

/**
 * Implementation of IDatabase that offers wrapper api around Cordova databases.
 * 
 * @author orionframework
 */
export class CordovaDatabase extends AbstractDatabase implements IDatabase {

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

        return new Promise(async (resolve, reject) => {

            this.database.transaction((tx: any) => {

                resolve(new CordovaTransaction(tx));

            }, (error: any) => {

                reject(error);
            });
        });
    }

    public executeBatch(statements: SqlStatement[], options: TransactionOptions): Promise<void> {

        return new Promise((resolve, reject) => {

            this.database.sqlBatch(statements, () => {

                resolve();

            }, (error: any) => {

                reject(error);
            })
        });
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/

}