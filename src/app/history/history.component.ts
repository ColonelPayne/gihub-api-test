import { Component, OnInit, Input } from '@angular/core';
import { HistoryService } from './history.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  userlogs: any = [];

  constructor(private historyService: HistoryService) {
    this.historyService.getLog('userlog').subscribe(data => {
      console.log(data);
      this.userlogs = data;
    })
  }

  onRemove() {
    this.historyService.remove('userlog');
  }

  ngOnInit() {

  }

}
