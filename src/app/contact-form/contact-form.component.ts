import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


  onSubmit(form) {
    console.log(form);
  }

  log(x) {
    console.log(x);
  }

  constructor() { }

  ngOnInit() {
  }

}
