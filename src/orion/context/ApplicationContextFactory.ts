import { AutowireOptions } from './AutowireOptions';
/**
 * Base signature for a factory-style dependency injection API.
 * 
 * @author orionframework
 * 
 * 
 */
export class ApplicationContextFactory {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/


    /**
     * Retrieve an object instance for the given auto-wiring options.
     * 
     * @param options the options used to retrieve the object instance
     * 
     * @return object instance for the given options
     */
    public get(options: AutowireOptions): any {

        let type: any = options.type;

        return new type();
    }

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/
}