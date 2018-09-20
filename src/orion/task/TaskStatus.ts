/**
 * Component responsible for monitoring the execution status of a task and its activities;
 * 
 * @author orionframework
 * 
 * 
 */
export interface TaskStatus {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * The number of activities pending execution
     */
    idle?: number;

    /**
     * The number of activities currently running.
     */
    running?: number;

    /**
     * The number of completed activities
     */
    complete?: number;

    /**
     * The total number of tasks fully executed.
     */
    total?: number;

    /**
     * The number of activites that failed so far.
     */
    failed?: number;

    /**
     * The fractional number of activities currently running as multi-step sub-task. In other words,
     * the average completion on all running multi-step sub-tasks.
     */
    partial?: number;

    /**
     * The percentage completion of all tasks (including multi-step sub-tasks)
     */
    progress?: number;

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/
} 