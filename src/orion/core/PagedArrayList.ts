import { Query } from './../query/Query';
import { ArrayList } from './ArrayList';
/**
 * Extension of ArrayList class that implements data pagination.
 * 
 * @author orionframework
 */
export class PagedArrayList<T extends Object=Object> extends ArrayList<T> {

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
     * Function used to load more records
     */
    public loader: (query: Query) => Promise<T[]>;

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
        super();
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
     * Indicate rather this list can load more pages.
     * 
     * @return true if more pages can be loaded, false otherwise.
     */
    public hasMore(): boolean {

        return this.query.pager.total! > this.query.pager.first!;
    }

    /**
     * Load the next available page in the queue into this ArrayList. 
     * To avoid any underlying errors  please ensure to call {@link #hasMore()} 
     * to check if another page is available or not.
     */
    public async nextPage(): Promise<T[]> {

        let batch: T[] = await this.loader(this.query);

        this.addAll(batch);

        this.query.pager.first! += this.query.pager.max!;

        return batch;
    }

    // -------------------------------------------------
    // protected
    // -------------------------------------------------

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