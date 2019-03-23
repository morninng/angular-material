import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


interface User {
  name: string,
}

@Component({
  selector: 'app-drag-drop-firebase',
  templateUrl: './drag-drop-firebase.component.html',
  styleUrls: ['./drag-drop-firebase.component.scss']
})
export class DragDropFirebaseComponent implements OnInit {

  itemsA: User[];
  itemsB: User[];

  constructor(
    private db: AngularFirestore,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.db.collection<User>('items-a').valueChanges().subscribe((data: User[])=>{
      console.log(data);
      this.itemsA = data;
      this.ref.markForCheck();
    });
    this.db.collection<User>('items-b').valueChanges().subscribe((data: User[])=>{
      console.log(data);
      this.itemsB = data;
      this.ref.markForCheck();
    });
  }

  drop(event: CdkDragDrop<string[]>) {

    console.log(event);

    if (event.previousContainer === event.container) {
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      const previous_container_id = event.previousContainer.id;
      console.log('previous_container_id', previous_container_id);

      const current_item = event.container.data[event.currentIndex];
      console.log('current_item', current_item);


    }
  }

}
