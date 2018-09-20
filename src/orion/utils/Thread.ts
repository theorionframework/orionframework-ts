

/**
 * Thread-based utilities.
 * 
 * @author orionframework
 */
export class Thread {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    // -------------------------------------------------
    // public
    // -------------------------------------------------

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
     * Run the given set of functions in parallel to each other on a given maximum number of executions at a time, 
     * simulating the experience of a multi-threaded environment. Note that all executed functions are asynchrounous,
     * therefore it's expected each one of them return a promise. 
     * 
     * When all are completed, the main returned promise will be resolved. Rejection is raised for any failed runner
     * call.
     * 
     * @param count maximum number of executions at a time
     * 
     * @param runners runners callback functions to be executed in parallel
     * 
     * @return promise
     */
    public static parallel(count: number, runners: Runner[]): Promise<void> {

        return new Promise<void>((resolve, reject) => {

            let started = 0;
            let running = 0;
            let executed = 0;

            function run(): Promise<void> {

                let runner = runners[running];

                running += 1;
                started += 1;

                let promise = runner();

                promise.then(() => {
                    running -= 1;
                    executed += 1;

                    more();

                }, reason => {
                    running -= 1;
                    executed += 1;

                    reject(reason);
                });

                more();

                return promise;
            }

            function more() {

                if (!hasMore()) {

                    resolve();
                }
                else if (isAvailable()) {

                    run();
                }
            }

            function hasMore(): boolean {

                return executed < runners.length;
            }

            function isAvailable(): boolean {

                return running < count && started < runners.length;
            }

            more();
        });
    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/

}

export declare type Runner = () => Promise<void>;