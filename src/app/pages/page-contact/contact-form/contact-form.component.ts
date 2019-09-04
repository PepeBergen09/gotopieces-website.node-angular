import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
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
