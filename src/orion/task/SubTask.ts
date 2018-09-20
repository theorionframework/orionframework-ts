import { EventDispatcher } from "../core/EventDispatcher";
import { Property } from "../core/Property";

/**
 * Component responsible for mapping an activity or sub-task of a parent task.
 * 
 * @author orionframework 
 * 
 * 
 */
export class SubTask extends EventDispatcher {

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * A label describing what the sub-task is currently doing. Note that it may also
     * contain an error if #success is currently set to false.
     */
    @Property()
    public label: String;

    /**
     * Rather this sub-task is still running or not.
     */
    @Property()
    public running: boolean;

    /**
     * Rather this task has completed running successfully or not.
     */
    @Property()
    public complete: boolean;

    /**
     * Flag indicating this sub-task has the intent of running multiple asynchronous activities.
     */
    @Property()
    public multistep: boolean;

    /**
     * The current progress for this sub-task.
     */
    @Property()
    public progress: number = 0;

    /**
     * Storage for error indicating rather this sub-task has failed to execute.
     */
    @Property()
    public error: any;

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

}