import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bootstrap-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {

  @Input() totalLikes = 0;
  @Input() iLike = false;

  onClick(){
    console.log("iLike before" + this.iLike);
    console.log("total before" + this.totalLikes);
    this.iLike = !this.iLike;
    this.totalLikes += this.iLike ? 1 : -1;
  }

  constructor() { }

  ngOnInit() {
  }

}
