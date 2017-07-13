import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bootstrap-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  isExpanded = false;
  @Input() tittle: string;
  toggle(){
    this.isExpanded = !this.isExpanded;
  }

  constructor() { }

  ngOnInit() {
  }

}
