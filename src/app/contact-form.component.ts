import {Component} from '@angular/core';




@Component({
    selector: 'contact-form',
    templateUrl: 'contact-form.component.html'
})
export class ContactFormComponent{

    onSubmit(form){
        console.log(form);
    }

    log(x){
        console.log(x);
    }
}
