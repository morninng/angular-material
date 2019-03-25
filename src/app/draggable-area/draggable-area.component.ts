import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-draggable-area',
  templateUrl: './draggable-area.component.html',
  styleUrls: ['./draggable-area.component.scss']
})
export class DraggableAreaComponent implements OnInit {

  @Input() items;
  @Input() item_name;
  @Output() onDrop = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  drop(event) {
    console.log('drop');
    this.onDrop.emit(event);
  }

}
