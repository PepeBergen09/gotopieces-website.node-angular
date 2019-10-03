import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }
  registerEmail(record){
    return this.db.collection('Newsletters').add(record);
  }

  createStudent(record){
    return this.db.collection('Students').add(record);
  }


}
