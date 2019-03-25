import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { AngularFirestore } from '@angular/fire/firestore';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


interface User {
  name: string,
}
interface UserWithId extends User {
  id?: string,
}

@Component({
  selector: 'app-drag-drop-firebase',
  templateUrl: './drag-drop-firebase.component.html',
  styleUrls: ['./drag-drop-firebase.component.scss']
})
export class DragDropFirebaseComponent implements OnInit {

  itemsA: UserWithId[];
  itemsB: UserWithId[];
  itemsC: UserWithId[];

  constructor(
    private db: AngularFirestore,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.db.collection<User>('items-a').snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
    .subscribe((data: UserWithId[])=>{
      console.log(data);
      this.itemsA = data;
      this.ref.markForCheck();
    });

    this.db.collection<User>('items-b').snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
    .subscribe((data: UserWithId[])=>{
      console.log(data);
      this.itemsB = data;
      this.ref.markForCheck();
    });

    this.db.collection<User>('items-c').snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
    .subscribe((data: UserWithId[])=>{
      console.log(data);
      this.itemsC = data;
      this.ref.markForCheck();
    });

  }

  drop(event: CdkDragDrop<UserWithId[]>) {

    console.log(event);

    if (event.previousContainer === event.container) {
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {



      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);


        console.log('event.currentIndex', event.currentIndex);
        console.log('event.container.data', event.container.data);
        console.log('event.container.data[0]', event.container.data[0]);
        console.log('event.container.data[1]', event.container.data[1]);
        console.log('event.container.data[2]', event.container.data[2]);
        console.log('event.container.data.length', event.container.data.length);
        const current_item: UserWithId = event.container.data[event.currentIndex];
        console.log('current_item', current_item);

        const id = '' + current_item.id;
        delete current_item.id;
        const item = current_item;
        const previous_container_id = event.previousContainer.id;
        const container_id = event.container.id;
        console.log('previous_container_id', previous_container_id);

        this.delete_from_firebase(previous_container_id, id);
        this.add_to_firebase(container_id, current_item);

    }
  }

  delete_from_firebase(path: string, id: string){
    console.log(`delete_from_firebase`);
    const itemDoc = this.db.doc<User>(`${path}/${id}`);
    itemDoc.delete();
  }

  add_to_firebase(path: string, item: User){
    console.log(`add_to_firebase`);
    const collection = this.db.collection<User>(`${path}`);
    collection.add(item);
  }


}
