import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
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

  onFavoriteChange($event){
    console.log($event);
  }

  onVote($event){
    console.log($event);
  }
}
