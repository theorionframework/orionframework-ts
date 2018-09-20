import { EventDispatcher } from '../../core/EventDispatcher';
import { OnChanges, Input, EventEmitter, Output } from '@angular/core';

import { FormControl, ControlValueAccessor } from '@angular/forms';

/**
 * Abstract implementation of a form's field used as a basis for any field
 * implementation.
 * 
 * @author orionframework
 * 
 * 
 */
export class AbstractField<T> extends EventDispatcher implements ControlValueAccessor, OnChanges {

    /*----------------------------------------------------------
     * CONSTANTS
     *----------------------------------------------------------*/

    /**
     * Event dispatched when the content of this field changes. Parameters
     * include:
     * 
     * <table class="events"> <thead>
     * <tr>
     * <td>Name</td>
     * <td>Type</td>
     * <td>Description</td>
     * </tr>
     * </thead> <tbody>
     * <tr>
     * <td>value</td>
     * <td>Object</td>
     * <td>The new value applied to this field.</td>
     * </tr>
     * <tr>
     * <td>oldValue</td>
     * <td>Object</td>
     * <td>The previous value stored in this field</td>
     * </tr>
     * </tbody> </table>
     * 
     * @event
     */
    public static readonly ON_CHANGE = "onChange";

    /*----------------------------------------------------------
     * END OF CONSTANTS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * ATTRIBUTES
     *----------------------------------------------------------*/

    /**
     * Rather this list is operating under readonly mode or not. Whlie in read-only, this control
     * does not allow the user to change any of its content.
     */
    @Input('readonly')
    public readonly: boolean = false;

    /**
     * Rather this list is operating under readonly mode or not. Whlie in read-only, this control
     * does not allow the user to change any of its content.
     */
    @Input('name')
    public name: string;

    /**
     * Event dispatched whenever the content of this list changes.
     */
    @Output()
    public change: EventEmitter<any> = new EventEmitter();

    protected isDisabled: boolean = false;

    protected propagateChange: Function = (value: T) => { };

    protected validator: Function = () => { };

    // -------------------------------------------------
    // GETS AND SETS
    // -------------------------------------------------

    // ----------------------------------
    // value
    // ----------------------------------

    /**
     * The actual value mapped by this entity.
     */
    protected _value: T;

    public get value(): T {
        return this._value;
    }

    @Input('value')
    public set value(value: T) {

        let oldValue = this._value;

        this._value = value;

        if (oldValue != value) {

            this.propagateChange(value);

            this.dispatch(AbstractField.ON_CHANGE, [oldValue, value]);

            this.change.emit(value);
        }
    }

    // ----------------------------------
    // disabled
    // ----------------------------------

    public get disabled(): boolean {

        return this.isDisabled;
    }

    /*----------------------------------------------------------
     * END OF ATTRIBUTES
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * CONSTRUCTORS
     *----------------------------------------------------------*/

    /**
     * Constructor
     */
    constructor() {
        super();
    }

    /*----------------------------------------------------------
     * END OF CONSTRUCTORS
     *----------------------------------------------------------*/

    /*----------------------------------------------------------
     * METHODS
     *----------------------------------------------------------*/

    // -------------------------------------------------
    // public
    // -------------------------------------------------

    // ----------------------------------
    // ControlValueAccessor
    // ----------------------------------

    public writeValue(value: T) {

        if (value) {

            this.value = value;
        }
    }

    public registerOnChange(fn: Function) {

        this.propagateChange = fn;
    }

    public registerOnTouched() { }

    public validate(c: FormControl) {

        return this.validator(c);
    }

    public setDisabledState(isDisabled: boolean): void {

        this.isDisabled = isDisabled;
    }

    // ----------------------------------
    // OnChanges
    // ----------------------------------

    public ngOnChanges(inputs: any) {

        this.propagateChange(this.value);
    }

    // -------------------------------------------------
    // protected
    // -------------------------------------------------

    // -------------------------------------------------
    // private
    // -------------------------------------------------

    // -------------------------------------------------
    // static
    // -------------------------------------------------

    /*----------------------------------------------------------
     * END OF METHODS
     *----------------------------------------------------------*/

}
