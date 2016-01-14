import {Component} from 'angular2/core';
import {FormSkuComponent} from './demo-form.component';
import {DemoFormSkuBuilder} from './deom-fb.component';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular2 Forms App</h1>
        <h3> Using form control</h3>
        <demo-form-sku></demo-form-sku>
        <br/>
        <h3> Using form builder</h3>
        <demo-form-sku-builder></demo-form-sku-builder>
        
    `,
    directives: [FormSkuComponent, DemoFormSkuBuilder]
})
export class AppComponent { }
