import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  name: string;
  email: string;
  subject: string;
  message: string;
  @ViewChild('contactform') form: NgForm;
  existError = false;
  existSuccess = false;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  sendMail() {
    this.existSuccess = false;
    if (this.form.valid) {
      this.existError = false;
      this.http.post("https://formspree.io/myywqolq",
          {
              name: this.form.value.name,
              reply_to: this.form.value._replayto,
              subject: this.form.value.subject,
              message: this.form.value.message
          },
      ).subscribe(() => {
        this.existSuccess = true;
        this.form.controls.name.setValue('');
        this.form.controls._replayto.setValue('');
        this.form.controls.subject.setValue('');
        this.form.controls.message.setValue('');
      });

    } else {
      this.existError = true;
    }

  }

}
