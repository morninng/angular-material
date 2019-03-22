import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropPreviewComponent } from './drag-drop-preview/drag-drop-preview.component';
import { DragDropConnectedSortComponent } from './drag-drop-connected-sort/drag-drop-connected-sort.component';
import { DragDropFirebaseComponent } from './drag-drop-firebase/drag-drop-firebase.component';
import { UserShowComponent } from './user-show/user-show.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    DragDropPreviewComponent,
    DragDropConnectedSortComponent,
    DragDropFirebaseComponent,
    UserShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

