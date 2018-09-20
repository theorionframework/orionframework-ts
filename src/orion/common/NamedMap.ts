
/**
 * Interface used to map a dynamic key-pair object using string as a key and a specific type as a value. 
 * 
 * @author orionframework
 */
export interface NamedMap<T> {
    [K: string]: T;
}