import { E4J } from './../utils/E4J';
import { AutowireOptions } from './AutowireOptions';
import { ApplicationContextFactory } from './ApplicationContextFactory';
import { EventDispatcher } from './../core/EventDispatcher';

/**
 * Baseline application context class. Inspired by Spring's Application Context, this
 * API aims to provide a simplistic approach for dependency injection and class instance
 * resolution at the same time as providing configuration over how dependencies are
 * injected/resolved.
 * 
 * @author orionframework
 * 
 * 
 */
export class ApplicationContext extends EventDispatcher {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /**
     * Singleton instance of this application context. Note that if your application works with multiple
     * application contexts, then the returned value for this property is the 
     */
    private static _singleton: ApplicationContext;

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
    constructor(protected factory: ApplicationContextFactory) {
        super();

        // load singleton
        if (!ApplicationContext._singleton) {
            ApplicationContext._singleton = this;
        }
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
     * Retrieve an object instance for the given auto-wiring options.
     * 
     * @param options the options used to retrieve the object instance
     * 
     * @return object instance for the given options
     */
    public getObject(options: AutowireOptions): any {

        if (options.name && options.contextual) {

            if (options.name == ".") {

                return this;
            }

            return E4J.read(this, options.name);
        }

        return this.factory.get(options);
    };

    // -------------------------------------------------
    // protected
    // -------------------------------------------------

    // -------------------------------------------------
    // private
    // -------------------------------------------------

    // -------------------------------------------------
    // static
    // -------------------------------------------------

    /**
     * Retrieve the currently stored singleton
     * 
     * @return singleton 
     */
    public static get(): ApplicationContext {
        return ApplicationContext._singleton;
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/

}