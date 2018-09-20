import { QueryFunctionName } from "./QueryFunctionName";

/**
 * Interface that encapsulates what a query function
 * 
 * @author orionframework
 * 
 * 
 */
export interface QueryFunction {

    /**
     * The name of the function being called
     */
    name: QueryFunctionName;

    /**
	 * List of arguments passed to this function.
	 * 
	 * <p>
	 * Note that there are multiple available options to have arguments refer to
	 * selecting/table fields, being:
	 * </p>
	 * 
	 * <ul>
	 * <li>String fields starting with <b>colon</b>. I.E: <b>:name</b></li>
	 * <li>An instance of {@link IQueryField}</li>
	 * </ul>
	 * 
	 * <p>
	 * Note that aside from field names, the arguments are served as given to
	 * the generated query, meaning that will be no formatting prior to
	 * appending it to the final query, which means that if your parameter
	 * requires special quoting or any other specific format, it must manually
	 * be defined.
	 * </p>
	 * 
	 * @return arguments
     */
    arguments: any[];
}