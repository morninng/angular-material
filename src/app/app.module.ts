import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropPreviewComponent } from './drag-drop-preview/drag-drop-preview.component';
import { DragDropConnectedSortComponent } from './drag-drop-connected-sort/drag-drop-connected-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    DragDropPreviewComponent,
    DragDropConnectedSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

