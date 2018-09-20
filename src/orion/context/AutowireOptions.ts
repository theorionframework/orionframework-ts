/**
 * Interface that allows auto-wiring/dependency injection configuration.
 * 
 * @author orionframework
 * 
 * 
 */
export interface AutowireOptions {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * The type being injected.
     */
    type?: Function;

    /**
     * The name of the dependency
     */
    name?: string;

    /**
     * Rather the dependency name is contextual or a property of the ApplicationContext.
     */
    contextual?: boolean;

    /**
     * Additional arguments used to resolve the dependency.
     */
    args?: any;

    /**
     * Abstract dependencies are simply documented as properties that are forced to be redeclared within a parent class.
     */
    isAbstract?: boolean;

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

}