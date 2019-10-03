import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.css']
})
export class NewslettersComponent implements OnInit {

  title= "Newsletters";

  newsletters: any;
  newsletterEmail: string;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  CreateRecord(){
    let record = {};
    record['Email'] = this.newsletterEmail;
    this.firebaseService.registerEmail(record).then(resp => {
      this.newsletterEmail = "";
      window.alert('Thank you for your subscription');
      console.log(resp);
    })
    .catch(error => {
      console.log(error);
    }
    )

  }

}
