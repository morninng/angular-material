import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss']
})
export class UserShowComponent implements OnInit {

  @Input() user

  constructor() { }

  ngOnInit() {
  }

}
