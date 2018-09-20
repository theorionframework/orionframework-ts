import "reflect-metadata";

/**
 * Annotation used to map properties that can trigger property change events within the underlying event dispatcher instance.
 * 
 * @author orionframework
 * 
 * 
 */
export function Property(): Function {

    return function (target: Function, name: string, descriptor: any) {

        return {
            get: function () {

                if (this.__data) {
                    return this.__data[name];
                }
            },
            set: function (newValue: any) {

                if (!this.__data) {
                    this.__data = {};
                }

                var oldValue: any = this.__data[name];

                this.__data[name] = newValue;

                if (oldValue !== newValue) {

                    this.propertyChanged(name, oldValue, newValue);
                }
            }
        };
    };
}