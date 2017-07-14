import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from '../usernameValidators';

@Component({
  selector: 'bootstrap-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      loginTo: ['', Validators.required],
      account: fb.group({
        username: ['', Validators.compose([
          Validators.required,
          UsernameValidators.cannotContainSpace]),
          UsernameValidators.shouldBeUnique],
        password: ['', Validators.required]
      })
    });
  }

  signup() {
    console.log(this.form.value);
    this.form.get('account.username').setErrors({
      invalidLogin: true
    });
  }

  get username(){
    return this.form.get('account.username');
  }

  get password(){
    return this.form.get('account.password');
  }

  get loginTo(){
    return this.form.get('loginTo');
  }

  ngOnInit() {
  }

}
