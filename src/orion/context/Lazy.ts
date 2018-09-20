import { AutowireOptions } from './AutowireOptions';
import { ApplicationContext } from './ApplicationContext';
import "reflect-metadata";

/**
 * Component responsible for providing lazy-loading access to properties within a model class.
 * 
 * @author orionframework
 * 
 * 
 */
export function Lazy(): Function {
    return function (target: Function, name: string, descriptor: any) {

        let value: any = undefined;
        let options: AutowireOptions;

        return {
            get: async function () {
                if (!options && !value) {
                    options = {
                        type: target,
                        args: {
                            instance: this,
                            property: name
                        }
                    };
                    value = await ApplicationContext.get().getObject(options);
                }

                return value;
            },
            set: function (_value: any) {
                value = _value;
            }
        };
    };
}