System.register(['angular2/core', './demo-form.component', './deom-fb.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, demo_form_component_1, deom_fb_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (demo_form_component_1_1) {
                demo_form_component_1 = demo_form_component_1_1;
            },
            function (deom_fb_component_1_1) {
                deom_fb_component_1 = deom_fb_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>My First Angular2 Forms App</h1>\n        <h3> Using form control</h3>\n        <demo-form-sku></demo-form-sku>\n        <br/>\n        <h3> Using form builder</h3>\n        <demo-form-sku-builder></demo-form-sku-builder>\n        \n    ",
                        directives: [demo_form_component_1.FormSkuComponent, deom_fb_component_1.DemoFormSkuBuilder]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map