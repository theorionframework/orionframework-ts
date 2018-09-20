import { Dictionary } from './../common/Dictionary';

/**
 * Component used for logging messages to a console/file/memory output.
 * 
 * <ul class="import">
 * <li>import orion.reflect.ClassLoader;</li>
 * </ul>
 * 
 * @param _data
 *            hash holding potential options used to configure this logger
 * 
 * @class
 * @name orion.core.Logger
 * 
 * @author orionframework
 * 
 * 
 */
export class Logger {

    /*------------------------eve----------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /**
     * Storage for main singleton instance.
     */
    private static instance: Logger;

    /**
     * Stored logger instances.
     */
    private static instances: Dictionary = {};

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * Logger name
     */
    public name: string;

    /**
     * Flag indicating if logging is enabled
     */
    public enabled = true;

    /**
     * Reference to the component used to actually append the logged messages
     */
    protected console = window.console || {
        info: function () {
        },
        log: function () {
        },
        error: function () {
        },
        warn: function () {
        }
    };

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * CONSTRUCTORS
     *----------------------------------------------------------*/

    /**
     * Default constructor
     */
    constructor(name: string) {

        this.name = name;
    }

    /*----------------------------------------------------------
     * END OF CONSTRUCTORS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    // -------------------------------------------------
    // private
    // -------------------------------------------------
    /**
     * Log the given arguments within the given target function
     */
    private log(target: any, args: any[]) {

        args.unshift(this.name + " => ");

        target.apply(this, args);
    }

    // -------------------------------------------------
    // public
    // -------------------------------------------------

    /**
     * Log messages in the "DEBUG" group. This is used for logging messages in
     * debug mode, meaning technical messages that could help trace back where
     * the execution has potentially failed.
     * 
     * @param args
     *            {Any} 0..n arguments to be logged by this logger
     */
    debug(...args: any[]) {

        this.log(this.console.log, args);
    }

    /**
     * Log messages in the "INFO" group. This is used for messages that are
     * meant to inform something is going on.
     * 
     * @param args
     *            {Any} 0..n arguments to be logged by this logger
     */
    info(...args: any[]) {

        this.log(this.console.info, args);
    }

    /**
     * Log messages in the "WARN" group. This is used alert something wrong is
     * going on.
     * 
     * @param args
     *            {Any} 0..n arguments to be logged by this logger
     */
    warn(...args: any[]) {

        this.log(this.console.warn, args);
    }

    /**
     * Log messages in the "ERROR" group. This is used to inform a fatal has
     * happened possibly compromising the usage of the application.
     * 
     * @param args
     *            {Any} 0..n arguments to be logged by this logger
     */
    error(...args: any[]) {

        this.log(this.console.error, args);
    }

    // -------------------------------------------------
    // static
    // -------------------------------------------------

    /**
     * Retrieve the main logger singleton instance.
     */
    public static get(): Logger {

        if (!Logger.instance) {
            Logger.instance = new Logger("orion");
        }

        return Logger.instance;
    }

    /**
     * Retrieve the main logger singleton instance.
     */
    public static getFor(name: string): Logger {

        let logger = Logger.instances[name];

        if (!logger) {
            logger = Logger.instances[name] = new Logger(name);
            logger.enabled = Logger.get().enabled;
        }

        return logger;
    }

    /**
     * Set the enabled status on all existing and sub-sequently created loggers.
     * 
     * @param enabled 
     */
    public static setEnabled(enabled:boolean){

        Logger.get().enabled = enabled;

        for( var name in Logger.instances ){

            let logger = Logger.instances[name];

            logger.enabled = enabled;
        }
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}
