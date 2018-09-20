import { TransactionOptions } from './TransactionOptions';
import { Dictionary } from './../common/Dictionary';
import { Objects } from './../utils/Objects';
import { Arrays } from './../utils/Arrays';
import { TableMetadata } from './TableMetadata';
/**
 * Database that provides an access API to a SQL-based database.
 * 
 * @author orionframework
 * 
 * 
 */
export abstract class AbstractDatabase {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * Rather only a single database transaction can be opened at a time.
     */
    public linear: boolean = true;

    /**
     * Transaction queue for running database operations linearly.
     */
    protected queue: Promise<void>[];

    // -------------------------------------------------
    // GETS AND SETS
    // -------------------------------------------------

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * CONSTRUCTORS
     *----------------------------------------------------------*/

    /**
     * Constructor
     */
    constructor() {
    }

    /*----------------------------------------------------------
     * END OF CONSTRUCTORS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    // -------------------------------------------------
    // public
    // -------------------------------------------------

    /**
     * @inheritDoc
     */
    public async insert(metadata: TableMetadata,
        entities: Dictionary | Dictionary[],
        options?: TransactionOptions): Promise<void> {

        let progressHandler = options ? options.progressHandler : null;

        let batches = options && options.batchSize ?
            Arrays.split(Arrays.toArray(entities), options.batchSize) :
            [Arrays.toArray(entities)];

        var defaults: Dictionary = {};
        let fields: string[] = metadata.columns.map(column => column.propertyName);
        let columns: string[] = metadata.columns.map(column => {

            defaults[column.databaseNameWithoutPrefixes] = Objects.isDefined(column.default) ? column.default : null;

            return column.databaseNameWithoutPrefixes;
        });
        let table = metadata.tableName;
        let sql = "insert into " + table + "(" + columns.join(", ") + ") values ( " + columns.map(column => "?").join(", ") + ")";
        let progress = 0;

        for (let batch of batches) {

            let statements = batch.map(record => [
                sql,
                fields.map(field => record[field] || defaults[field])
            ]);

            await (this as any).executeBatch(statements, options);

            if (progressHandler) {

                progress += 1;

                progressHandler(progress / batches.length)
            }
        }
    }

    /**
     * @inheritDoc
     */
    public async update(metadata: TableMetadata,
        entities: Dictionary | Dictionary[],
        options?: TransactionOptions): Promise<void> {

        let progressHandler = options ? options.progressHandler : null;

        let batches = options && options.batchSize ?
            Arrays.split(Arrays.toArray(entities), options.batchSize) :
            [Arrays.toArray(entities)];

        var defaults: Dictionary = {};
        let fields: string[] = metadata.columns.map(column => column.propertyName);
        let columns: string[] = metadata.columns.map(column => {

            defaults[column.propertyName] = Objects.isDefined(column.default) ? column.default : null;

            return column.databaseNameWithoutPrefixes;
        });
        let table = metadata.tableName;
        let sql = "update table " + table + " set " + columns.map(column => column + " = ?").join(", ") + " where TODO: PK = ....";
        let progress = 0;

        for (let batch of batches) {

            let statements = batch.map(record => [
                sql,
                fields.map(field => record[field] || defaults[field])
            ]);

            await (this as any).executeBatch(statements);

            if (progressHandler) {

                progress += 1;

                progressHandler(progress / batches.length)
            }
        }
    }

    /**
     * @inheritDoc
     */
    public async delete(metadata: TableMetadata,
        entities: Dictionary | Dictionary[],
        options?: TransactionOptions): Promise<void> {

        let progressHandler = options ? options.progressHandler : null;

        let batches = options && options.batchSize ?
            Arrays.split(Arrays.toArray(entities), options.batchSize) :
            [Arrays.toArray(entities)];

        var defaults: Dictionary = {};
        let fields: string[] = metadata.columns.map(column => column.propertyName);
        let table = metadata.tableName;
        let sql = "delete from " + table + " where TODO: PK = ....";
        let progress = 0;

        for (let batch of batches) {

            let statements = batch.map(record => [
                sql,
                fields.map(field => record[field] || defaults[field])
            ]);

            await (this as any).executeBatch(statements);

            if (progressHandler) {

                progress += 1;

                progressHandler(progress / batches.length)
            }
        }
    }

    // -------------------------------------------------
    // protected
    // -------------------------------------------------

    /** 
     * Check rather this database can run a next transaction or if we need to wait for it still.
     */
    protected onTransactionAvailable(): Promise<void> {

        if (!this.linear || this.queue.length == 0) {

            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {

            if (this.queue.length > 0) {

                this.queue[this.queue.length - 1].then(resolve, resolve);

                return;
            }
            else {

                resolve();
            }
        });
    }

    // -------------------------------------------------
    // private
    // -------------------------------------------------

    // -------------------------------------------------
    // static
    // -------------------------------------------------

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/

}