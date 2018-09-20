import { IEventDispatcher } from "./IEventDispatcher";
import { Logger } from "./Logger";
import { Arrays } from "../utils/Arrays";
import { Strings } from "../utils/Strings";

/**
 * EventDispatcher is the base signature class that defines methods for adding
 * or removing event listeners, checks whether specific types of event listeners
 * are registered, and dispatches events.
 * 
 * <p>
 * In general, the easiest way for a user-defined class to gain event
 * dispatching capabilities is to extend EventDispatcher. If this is impossible
 * (that is, if the class is already extending another class), you can instead
 * implement the IEventDispatcher interface, create an EventDispatcher member,
 * and write simple hooks to route calls into the aggregated EventDispatcher.
 * </p>
 * 
 * @author orionframework
 * 
 * 
 */
export class EventDispatcher implements IEventDispatcher {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /**
     * Event name dispatched whenver a property changes within an instance of this class.
     */
    public static readonly ON_PROPERTY_CHANGE: string = "onPropertyChange";

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * Parent <code>EventDispatcher</code> reference. Whenever provided,
     * this class shall only delegate all its operations to the parent
     * including binding, un-binding, triggering events, etc.
     */
    protected dispatcher: IEventDispatcher;

    /**
     * Map holding event name/type => array of handler functions
     */
    protected events: any = {};

    /**
     * Logging service
     */
    readonly log: Logger;

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * CONSTRUCTOR
     *----------------------------------------------------------*/

    constructor(log: Logger | null = null) {
        this.log = log || Logger.getFor(this.constructor.name);
    }

    /*----------------------------------------------------------
     * END OF CONSTRUCTOR
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    // ----------------------------------
    // public
    // ----------------------------------



    /**
     * Bind the given event name/type within the given handler, invoking the
     * handler method whenever an event with the same name/type is triggered
     * by this component.
     * 
     * @param name
     *            the name/type of the event being attached
     * 
     * @param handler
     *            the handler invoked whenever the given event name/type is
     *            triggered
     * 
     * @return itself for convenience
     */
    public bind(name: string, handler: any, scope?: any): IEventDispatcher {

        if (this.dispatcher) {

            this.dispatcher.bind(name, handler, scope);

        } else {

            this.getEventsByName(name, true).push({
                handler: handler,
                scope: scope || this
            });
        }

        return this;
    }

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
    public bindOnce(name: string, handler: Function, scope?: any): IEventDispatcher {

        /*
         * prevent invalid handlers from being registered
         */
        var internalHandler = function () {

            /*
                * unregister internal handler as we are only suppose to
                * listen to one event triggering
                */
            this.unbind(name, internalHandler);

            return handler.apply(this, arguments);
        };

        return this.bind(name, internalHandler, scope);
    }

    /**
     * UNbind the given event name/type within the given handler, preventing
     * the given handler from being invoked again when the same event is
     * dispatched by this class.
     * 
     * @param name
     *            the name/type of the event being attached
     * 
     * @param handler
     *            the handler invoked whenever the given event name/type is
     *            triggered
     * 
     * @return itself for convenience
     */
    public unbind(name: string, handler: Function): IEventDispatcher {

        if (this.dispatcher) {

            this.dispatcher.unbind(name, handler);

        } else {

            var events = this.getEventsByName(name, false);

            if (!Arrays.isEmpty(events)) {

                var index = this.getEventIndexByHandler(events, handler);

                if (index >= 0) {

                    /*
                        * if currently dispatching the event being unbound, then we
                        * can't remove it form the list. We just null it as the
                        * dispatch method will force a clean-up after
                        */
                    if (events.dispatching) {

                        /*
                        * flag events as dirty forcing dispatch to clean it
                        * after done dispatching
                        */
                        events.dirty = true;

                        events[index] = null;

                    } else {

                        Arrays.removeAt(events, index);
                    }
                }
            }
        }

        return this;
    }

    /**
     * Check if the given event name/type has any registered listeners
     * 
     * @param name
     *            the name/type of event
     * 
     * @return true if has at one or more listeners, false otherwise
     */
    public hasListener(name: string): boolean {

        let events = this.getEventsByName(name, false);

        return !Arrays.isEmpty(events);
    }

    /**
     * Dispatch an event of the given name passing the given parameters to
     * the bound handlers
     * 
     * @param name
     *            {String} the name of the event
     * 
     * @param parameters
     *            {Array} array of parameters passed to the invoked handlers
     * 
     * @return {Boolean} rather any event request to prevent default bound
     *         operation where <code>true</code> means the dispatched
     *         executed until the end and <code>false</code> it was
     *         prevented propagation
     */
    public dispatch(name: string, parameters?: any[]): boolean {

        var events: any = this.getEventsByName(name, false);

        // no events registered
        if (Arrays.isEmpty(events)) {
            return false;
        }

        /*
            * LOGGING
            */
        if (this.log.enabled) {
            this.log.debug("Event: " + name + ", Parameters:", parameters);
        }

        parameters = parameters || [];

        var prevented = false;

        events.dispatching = true;

        events.forEach((event: any, index: number) => {

            if (event !== null) {

                if (event.handler.apply(event.scope, parameters) === false) {

                    /*
                        * LOGGING
                        */
                    if (this.log.enabled) {
                        this.log.debug("Prevented default for " + name, this);
                    }

                    prevented = true;

                    return false;
                }
            }

            return;

        });

        /*
            * if events are dirty, then start removing dirty handlers from it
            */
        if (events.dirty) {

            var index = events.indexOf(null);

            while (index >= 0) {

                Arrays.removeAt(events, index);

                index = events.indexOf(null);
            }
        }

        delete events.dispatching;
        delete events.dirty;

        return !prevented;
    }

    // ----------------------------------
    // internal
    // ----------------------------------

    /**
     * Retrieve the Array of events bound to the given event name/type.
     * 
     * @param name
     *            {String} the event name/type
     * 
     * @return {Array} handlers bound to the given event name/type
     */
    protected getEventsByName(name: string, autoInitialize: boolean): any {

        if (!name || name === "undefined") {

            throw new Error("Event name not defined on "
                + this.constructor.name);
        }

        var events = this.events[name];

        /*
            * lazy initialize
            */
        if (!events && autoInitialize) {

            events = this.events[name] = [];
        }

        return events;
    }

    /**
     * Look-up for the event based on its given handler function
     * 
     * @param events event array
     * @param handler event handler
     */
    protected getEventIndexByHandler(events: any[], handler: Function): number {

        for (let i = 0; i < events.length; i++) {

            let event = events[i];

            if (event && event.handler == handler) {

                return i;
            }
        }

        return -1;
    }

    /**
     * Method invoked by the built-in class-system whenever a property has
     * its content altered.
     * 
     * <p>
     * Dispatches a <code>EventDispatcher#ON_PROPERTY_CHANGE</code> event
     * to notify the property change.
     * </p>
     * 
     * @param name
     *            {String} the name of the property that has changed.
     * 
     * @param oldValue
     *            {any} the old value of the property that has changed
     * 
     * @param newValue
     *            {any} the new applied value for the changing property
     */
    protected propertyChanged(name: string, oldValue: any, newValue: any) {

        // this.getSuper().propertyChanged(name, oldValue, newValue);

        /*
            * notify property change
            */
        if (oldValue !== newValue) {

            this.dispatch(EventDispatcher.ON_PROPERTY_CHANGE, [name,
                oldValue, newValue]);

            let propertyEvent = "on" + Strings.capitalize(name) + "Change";

            this.dispatch(propertyEvent, [oldValue, newValue]);
        }
    }

    /**
     * Check if this component has been internally initialized. For the
     * EventDispatcher, this is only used so property change events are not
     * triggered during construction.
     * 
     * @return {Boolean} is this component initialized?
     */
    protected isInitialized() {

        return true;
    }

    // ----------------------------------
    // static
    // ----------------------------------

    /**
     * Reusable function used to prevent the default operation of a handler,
     * always returning false;
     */
    public static preventDefault(name: String): boolean {
        return false;
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}