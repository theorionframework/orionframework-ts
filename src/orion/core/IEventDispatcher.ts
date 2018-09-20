/**
 * IEventDispatcher is the base signature interface that defines methods for
 * adding or removing event listeners, checks whether specific types of event
 * listeners are registered, and dispatches events.
 * 
 * @author orionframework
 * 
 * 
 */
export interface IEventDispatcher {

    /**
     * Bind the given event name/type within the given handler, invoking the handler
     * method whenever an event with the same name/type is triggered by this
     * component.
     * 
     * @param name
     *            the name/type of the event being attached
     * 
     * @param handler
     *            the handler invoked whenever the given event name/type is
     *            triggered
     * 
     * @param scope 
     *            the scope in which to invoke the handler function
     * 
     * @return itself for convenience
     */
    bind(name: string, handler: any, scope?: any): IEventDispatcher;

    /**
     * Bind the given handler within the given event name automatically
     * unregistering it after the first the event is dispatched.
     * 
     * @param name
     *            the name/type of the event being attached
     * 
     * @param handler
     *            the handler invoked whenever the given event name/type is
     *            triggered
     *            triggered
     * 
     * @param scope 
     *            the scope in which to invoke the handler function
     * 
     * @return itself for convenience
     */
    bindOnce(name: string, handler: Function, scope: any): IEventDispatcher;

    /**
     * UNbind the given event name/type within the given handler, preventing the
     * given handler from being invoked again when the same event is dispatched by
     * this class.
     * 
     * @param name
     *            the name/type of the event being attached
     * 
     * @param handler
     *            the handler invoked whenever the given event name/type is
     *            triggered
     * 
     * @return itself for convenience
     * 
     * @memberOf orion.core.IEventDispatcher.prototype
     * @member orion.core.IEventDispatcher
     */
    unbind(name: string, handler: any): IEventDispatcher;

    /**
     * Check if the given event name/type has any registered listeners
     * 
     * @param name
     *            the name/type of event
     * 
     * @return true if has at one or more listeners, false otherwise
     */
    hasListener(name: string): boolean;

    /**
     * Dispatch an event of the given name passing the given parameters to the bound
     * handlers
     * 
     * @param name
     *            the name of the event
     * 
     * @param parameters
     *            array of parameters passed to the invoked handlers
     */
    dispatch(name: string, parameters?: any): boolean;
}