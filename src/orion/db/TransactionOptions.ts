/**
 * Component indicate the options used while performing a transaction within an IDatabase implemenmtation.
 * 
 * @author orionframework
 */
export interface TransactionOptions {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * Rather we should wait for each statement to be completed before closing down a transaction.
     */
    individualStatements?: boolean;

    /**
     * The number of records persisted in each individual batch. 
     * If undefined, simply persists the entire set into one single transaction.
     */
    batchSize?: number;

    /** 
     * Handler function invoked to indicate current progress/status on a bulk operation.
     */
    progressHandler?: (progress: number) => void;

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/
}