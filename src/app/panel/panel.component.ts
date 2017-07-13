import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bootstrap-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  isExpanded = false;

  constructor() { }

  @Input() tittle: string;
  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
  }

}
