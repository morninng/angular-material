import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-drag-drop-firebase',
  templateUrl: './drag-drop-firebase.component.html',
  styleUrls: ['./drag-drop-firebase.component.scss']
})
export class DragDropFirebaseComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
  }

}
