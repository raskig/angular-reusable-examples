import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-view-selector',
  templateUrl: './view-selector.component.html',
  styleUrls: ['./view-selector.component.css']
})
export class ViewSelectorComponent implements OnInit {

  viewMode= 'map';

  constructor() { }

  ngOnInit() {
  }

}
