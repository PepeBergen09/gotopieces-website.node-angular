import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  name: string;
  email: string;
  subject: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

}
