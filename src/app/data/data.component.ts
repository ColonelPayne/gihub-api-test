import { Component, OnInit, Input } from '@angular/core';
import { User } from './../form/user';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
