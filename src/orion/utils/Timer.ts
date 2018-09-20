import { GUID } from "./GUID";
import { Arrays } from "./Arrays";

/**
 * Encapsulate time-utility functions into a single static class.
 * 
 * <p>
 * Timer utilities used to call a function every # of milliseconds making usage
 * of setInterval Javascript function but enabling functions to be called within
 * specified parameter values only once or forever and also stopping the
 * callback function from being called by using its function reference rather
 * than the setInterval's generated id.
 * </p>
 * 
 * <p>
 * Sinon (used for testing purposes) overwrite the global time-utilities and
 * there seems to be some problems with its own implementation. We keep a
 * reference of the native implementation as we don't want our API to be
 * affected by Sinon.
 * </p>
 * 
 * <ul class="import">
 * <li>import orion.utils.GUID;</li>
 * </ul>
 * 
 * @author orionframework
 * 
 * 
 * 
 * @class
 * @name Timer
 */
export class Timer {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    public static builtIn: any = {

        setInterval: window.setInterval,
        clearInterval: window.clearInterval,
        setTimeout: window.setTimeout,
        clearTimeout: window.clearTimeout
    }

    /**
     * Storage for registered callback UIDs currently running
     */
    public static running: any = {}

    /**
     * Deferred callback invoked in bulk.
     */
    public static deferred: Function[] = [];

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /**
     * Register a callback to be called forever every given number of
     * milliseconds. The callback function is called passing the given arguments
     * <p>
     * The Timer#forever() method calls a function or evaluates an expression at
     * specified intervals (in milliseconds).
     * </p>
     * 
     * <p>
     * The Timer#forever() method will continue calling the function until
     * Timer#stop() is called, or the window is closed.
     * </p>
     * 
     * Tip: 1000 ms = 1 second.
     * 
     * @param callback
     *            the function called every given number of milliseconds
     * 
     * @param delay
     *            time in milliseconds until the callback function is called
     * 
     * @param args
     *            the arguments to be passed when calling the callback function
     * 
     * @return generated id used to stop the timer via Timer#stop(id)
     * 
     * @member Timer
     * @function
     */
    public static forever(callback: Function, delay: number, ...args: any[]) {

        /*
         * prevent same callback from being called multiple times
         */
        Timer.stop(callback);

        var uid = GUID.get(callback);

        var handler = function () {

            if (!(args instanceof Array)) {

                args = [args];
            }

            callback.apply(null, args);
        };

        var forever = Timer.builtIn.setInterval;

        /*
         * add handler to the queue so we can stop it by passing the callback
         * function later
         */
        var id = forever(handler, delay);

        Timer.running[uid] = id;

        return id;
    }

    /**
     * The Timer#stop(callback) method clears a timer set with the
     * Timer#forever(callback, delay) method.
     * 
     * <p>
     * The function value passed to Timer#forever(callback) is used as the
     * parameter for the Timer#stop(callback) method.
     * <p>
     * 
     * @return true if cleared, false otherwise
     * 
     * @member Timer
     * @function
     */
    public static stop(callback: Function): boolean {

        var uid = GUID.get(callback);

        var id = Timer.running[uid];

        if (id) {

            var clear = Timer.builtIn.clearInterval;

            clear(id);

            delete Timer.running[uid];

            return true;
        }

        return false;
    }

    /**
     * Register a callback function to be called once within the given number of
     * milliseconds. The callback function is called only once and passes the
     * given arguments.
     * 
     * <p>
     * The Timer#once() method calls a function or evaluates an expression at
     * specified intervals (in milliseconds).
     * </p>
     * p>
     * 
     * Tip: 1000 ms = 1 second.
     * 
     * <p>
     * The Timer#once() method will call the given function only once.
     * </p>
     * 
     * @param callback
     *            the function called once within the given number of
     *            milliseconds
     * 
     * @param delay
     *            time in milliseconds until the callback function is called
     * 
     * @param args
     *            the arguments to be passed when calling the callback function
     * 
     * @return generated id used to stop the timer via Timer#stopOnce(id)
     * 
     * @member Timer
     * @function
     */
    public static once(callback: Function, delay: number, ...args: any[]) {

        /*
         * prevent same callback from being called multiple times
         */
        Timer.stopOnce(callback);

        if (delay === 0) {

            return callback();
        }

        var uid = GUID.get(callback);

        var handler = function () {

            Timer.stop(callback);

            callback.apply(null, args);
        };

        var once = Timer.builtIn.setTimeout;

        /*
         * add handler to the queue so we can stop it by passing the callback
         * function later
         */
        var id = once(handler, delay);

        Timer.running[uid] = id;

        return id;
    }

    /**
     * The Timer#stopOnce(callback) method clears a timer set with the
     * Timer#once(callback, delay) method.
     * 
     * <p>
     * The callback value passed to Timer#once(callback) is used as the
     * parameter for the Timer#stopOnce(callback) method.
     * <p>
     * 
     * @return true if cleared, false otherwise
     * 
     * @member Timer
     * @function
     */
    public static stopOnce(callback: Function) {

        var uid = GUID.get(callback);

        var id = Timer.running[uid];

        if (id) {

            var clear = Timer.builtIn.clearTimeout;

            clear(id);

            delete Timer.running[uid];

            return true;
        }

        return false;
    }


    /**
     * Defer a callback to be invoked later in a bulk-sequence.
     * 
     * @param callback
     *            {Function} the function being invoked whenever possible
     */
    public static defer = (function () {

        /*
         * invocation handle that makes sure all deferred functions are invoked
         */
        var invoke = function () {

            while (Timer.deferred.length > 0) {

                var callback: any = Timer.deferred.pop();

                try {

                    callback();

                } catch (e) {

                    /*
                     * log deferred function failure as there doesn't seem to be an
                     * easy way to figure out the error if we don't  it is a
                     * time based execution without previous requested scope
                     * available for debugging
                     */
                    console.error("Failure while invoking deffered function", e,
                        callback.toString());
                }
            }
        };

        return function (callback: Function, delay?: number) {

            var index = Timer.deferred.indexOf(callback);

            /*
             * remove previously deferred function
             */
            if (index >= 0) {

                Timer.deferred.splice(index, 1);
            }

            Timer.deferred.push(callback);

            /*
             * postpone it for another 10 ms
             */
            Timer.stopOnce(invoke);
            Timer.once(invoke, delay || 10);
        };
    })();

    /**
     * Cancel a deferred callback function preventing it from being executed.
     * 
     * @param callback
     *            {Function} the function being cancelled
     */
    public static undefer(callback: Function) {

        Arrays.remove(Timer.deferred, callback);
    };
};