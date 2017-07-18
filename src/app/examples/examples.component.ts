import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  post = {
    title: 'App component main Tittle',
    isFavorite: true,
    totalLikes: 10,
    iLike: false
  }

  tweet = {
    totalLikes: 10,
    iLike: false
  }

  vote = {
    count: 10,
    myVote: 0
  }

  onFavoriteChange($event) {
    console.log($event);
  }

  onVote($event){
    console.log($event);
  }
}
