import { ITransaction } from './../ITransaction';
import { IResultSet } from '../IResultSet';

/**
 * Implementation of IDatabase that offers wrapper api around Sql.js databases.
 * 
 * @author orionframework
 * 
 * 
 */
export class SqlJsTransaction implements ITransaction {

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

        this.database = database;
    }

    /*----------------------------------------------------------
     * END OF CONSTRUCTORS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    public executeSql(sql: string, args?: any[]): Promise<IResultSet> {

        return new Promise((resolve, reject) => {

            try {
                let statement = this.database.prepare(sql, args);
                let records: any[] = [];

                while (statement.step()) {
                    records.push(statement.getAsObject());
                }

                resolve({
                    rows: {
                        length: records.length,
                        item: (i) => records[i]
                    }
                })
            }
            catch (e) {
                reject(e);
            }
        });
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/

}