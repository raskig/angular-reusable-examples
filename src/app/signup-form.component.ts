import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {UsernameValidators} from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'signup-form.component.html'
})
export class SignUpFormComponent {
    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            username: ['', Validators.compose([
                    Validators.required,
                    UsernameValidators.cannotContainSpace]),
            UsernameValidators.shouldBeUnique],
            password: ['', Validators.required]
        });
    }

    signup() {
        console.log(this.form.value);
        this.form.get('username').setErrors({
            invalidLogin: true
        });
    }
}
