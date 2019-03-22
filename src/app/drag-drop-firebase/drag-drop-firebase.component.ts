import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

interface User {
  name: string,
}

@Component({
  selector: 'app-drag-drop-firebase',
  templateUrl: './drag-drop-firebase.component.html',
  styleUrls: ['./drag-drop-firebase.component.scss']
})
export class DragDropFirebaseComponent implements OnInit {

  itemsA: Observable<User[]>;
  itemsB: Observable<User[]>;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {
    this.itemsA = this.db.collection<User>('items-a').valueChanges();
    this.itemsB = this.db.collection<User>('items-b').valueChanges();
  }

}
