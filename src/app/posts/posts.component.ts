import {Component, OnInit} from '@angular/core';
import {parseHttpResponse} from 'selenium-webdriver/http';
import {supportsState} from '@angular/platform-browser/src/browser/location/history';
import {PostService} from '../services/post.service';

@Component({
  selector: 'bootstrap-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
      this.service.getPost()
        .subscribe(response => {
        this.posts = response.json();
      });
  }

  updatePost(post) {
    this.service.updatePost(post.id)
      .subscribe(response => {
        console.log(response)
        console.log(response);
      });
    // or: this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
    // or: this.http.put(this.url, JSON.stringify(post));
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      });
  }

}
