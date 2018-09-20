import { ITransaction } from './../ITransaction';
import { IResultSet } from '../IResultSet';

/**
 * Implementation of IDatabase that offers wrapper api around Websql databases.
 * 
 * @author orionframework
 * 
 * 
 */
export class WebSqlTransaction implements ITransaction {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * The transaction connection;
     */
    protected transaction: any;

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * CONSTRUCTORS
     *----------------------------------------------------------*/

    /**
     * Constructor
     * 
     * @param transaction 
     */
    constructor(transaction: any) {

        this.transaction = transaction;
    }

    /*----------------------------------------------------------
     * END OF CONSTRUCTORS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    public executeSql(sql: string, args: any[]): Promise<IResultSet> {

        return new Promise((resolve, reject) => {

            this.transaction.executeSql(sql, args, (tx: any, result: any) => {

                resolve(result);

            }, (tx: any, error: any) => {

                reject(error);
            });
        });
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/

}