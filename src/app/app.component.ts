import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello Angular</h1><courses></courses> <authors></authors>
    <favorite [is-favorite]="[post.isFavorite]" (favorite-change-event)="onFavoriteChange($event)"></favorite>
    <!-- WROOOONG: '<heart [totalLikes]="[tweet.totalLikes]" [iLike]="[tweet.iLike]"></heart>-->
    <hr>
    <heart [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></heart>
    <hr>
    <vote [voteCount]="vote.count" [myVote]="vote.myVote" (vote)="onVote($event)"></vote>
    <hr>
    <div>
      <zippy tittle="Who can see my stuff?">This is the who can see.</zippy>
      <zippy tittle="Who can see my stuff2?">This is the who can see2.</zippy>
    </div>
    <hr>
    <contact-form></contact-form>
    <hr>
    <signup-form></signup-form>`
})
export class AppComponent {
  post = {
    title: "App component main Tittle",
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

  onFavoriteChange($event){
    console.log($event);
  }

  onVote($event){
    console.log($event);
  }
}
