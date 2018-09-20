import { AutowireOptions } from '../../context/AutowireOptions';
import { Injector, Injectable } from '@angular/core'
import { ApplicationContextFactory } from '../../context/ApplicationContextFactory';

/**
 * Component that provides auto-wiring for an ApplicationContext instance using
 * angular Dependency Injection.
 * 
 * 
 */
@Injectable()
export class ApplicationContextAngularFactory extends ApplicationContextFactory {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

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
    constructor(protected injector: Injector) {
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
     * {@inheritDocs}
     */
    public get(options: AutowireOptions): any {

        return this.injector.get(options.name || options.type);
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