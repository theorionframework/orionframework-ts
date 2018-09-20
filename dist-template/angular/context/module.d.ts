import { NgModule } from '@angular/core';
import { ApplicationContextAngularFactory } from './ApplicationContextAngularFactory';
import { ApplicationContextFactory } from '../../context/ApplicationContextFactory'

@NgModule({
    providers: [
        { provide: ApplicationContextFactory, useClass: ApplicationContextAngularFactory }
    ]
})
export class OrionAngularContextModule { }