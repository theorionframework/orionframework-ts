import { TaskStatus } from "./TaskStatus";
import { SubTask } from "./SubTask";
import { EventDispatcher } from "../core/EventDispatcher";

/**
 * Base api for running asynchronous tasks.
 * 
 * @author orionframework
 * 
 * 
 */
export class Task<T extends SubTask = SubTask> extends EventDispatcher {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * Flag indicating rather this task is currently running or not.
     */
    public running: boolean;

    /**
     * The current executing status for this task.
     */
    public status: TaskStatus = {
        running: 0,
        idle: 0,
        complete: 0,
        failed: 0,
        total: 0
    };

    // -------------------------------------------------
    // GETS AND SETS
    // -------------------------------------------------

    // ----------------------------------
    // subTasks
    // ----------------------------------

    /**
     * Storage for property <i>subTasks</i>
     */
    protected _subTasks: T[];

    /**
     * List of subTasks being executed by this event dispatcher.
     */
    public get subTasks(): T[] {
        return this._subTasks;
    }

    /**
     * setter function for property <i>subTasks</i>
     */
    public set subTasks(subTasks: T[]) {

        this._subTasks = subTasks;

        this._subTasks.forEach(subTask => this.processSubTask(subTask));

        this.status.total = this._subTasks.length;
    }

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * CONSTRUCTORS
     *----------------------------------------------------------*/

    constructor(subTasks: T[] = []) {
        super();

        this.subTasks = subTasks;
    }

    /*----------------------------------------------------------
     * END OF CONSTRUCTORS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    /**
     * Add a new sub task to this parent task
     * 
     * @param subTask new sub task
     */
    public add(subTask: T) {

        this.processSubTask(subTask);

        this.subTasks.push(subTask);

        this.status.total = this.subTasks.length;
    }

    // -------------------------------------------------
    // internal
    // -------------------------------------------------

    /**
     * Process the given sub-task watching for changes.
     * 
     * @param subTask 
     */
    protected processSubTask(subTask: T) {

        // ----------------------------------
        // handlers
        // ----------------------------------

        subTask.bind(EventDispatcher.ON_PROPERTY_CHANGE, () => {

            this.updateStatus();
        });
    }

    /**
     * Update the current status of this task.
     */
    protected updateStatus() {

        let total = this.subTasks.length;
        let complete = 0;
        let running = 0;
        let failed = 0;
        let multistep = 0;
        let processing = 0;

        this.subTasks.forEach(subTask => {

            if (subTask.running) {
                running += 1;

                if (subTask.multistep) {

                    multistep += 1;

                    processing += (subTask.progress / 100);
                }
            }
            else if (subTask.error) {
                failed += 1;
            }
            else if (subTask.running === false) {
                complete += 1;
            }
        });

        let partial = multistep ? processing / multistep : 0;
        let progress = ((complete + failed + partial) / total) * 100;

        this.status.complete = complete;
        this.status.running = running;
        this.status.failed = failed;
        this.status.partial = partial;
        this.status.progress = progress;

    }

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/
}