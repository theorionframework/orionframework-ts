import { Reflection } from './../utils/Reflection';
import { ApplicationContext } from './ApplicationContext';
import { AutowireOptions } from './AutowireOptions';
import "reflect-metadata";

/**
 * Component responsible for auto-wiring a dependency into an attribute within a given class. This is
 * to be used in conjunction with an ApplicationContext to manage and organize dependency injection
 * among other things.
 * 
 * @param options auto-wiring options
 * 
 * @author orionframework
 * 
 * 
 */
export function Autowire(params: AutowireOptions | string | Function): Function {
    return function (target: Function, name: string, descriptor: any) {

        let options: AutowireOptions;

        if (Reflection.isString(params)) {

            options = {
                name: params
            } as AutowireOptions;
        }
        else if (Reflection.isFunction(params)) {

            options = {
                type: params
            } as AutowireOptions;
        }
        else {

            options = params as AutowireOptions;
        }

        if (options.isAbstract) {

            return {
                get: function () {
                    throw new Error("Abstract property not redeclared : " + target.name + "#" + name);
                },
                set: function () {
                    throw new Error("Abstract property not redeclared : " + target.name + "#" + name);
                }
            };
        }

        var value: any = undefined;

        return {
            get: function () {
                /*

                if (!this.__data) {
                    this.__data = {};
                }
                */

                /*
                 * lazy load
                 */
                if (!value /*this.__data[name]*/) {
                    /*this.__data[name]*/ value = ApplicationContext.get().getObject(options as AutowireOptions);
                }

                return value /*this.__data[name]*/;
            },
            set: function (_value: any) {
                /*
                if (!this.__data) {
                    this.__data = {};
                }

                this.__data[name] = _value;
                */
                value = _value;
            }
        };
    };
}