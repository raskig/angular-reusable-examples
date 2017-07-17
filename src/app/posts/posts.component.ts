import {Component, OnInit} from '@angular/core';
import {parseHttpResponse} from 'selenium-webdriver/http';
import {supportsState} from '@angular/platform-browser/src/browser/location/history';
import {PostService} from '../services/post.service';
import {Observable} from "rxjs/Observable";
import {NotFoundError} from "../common/not-found-error";
import {AppError} from "../common/app-error";
import {BadInputError} from "../common/bad-input-error";

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
      },
          error => {
          alert('An unexpected error occured.');
        });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response)
        console.log(response);
      },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else {
            alert('Unexpected error occured.');
          }
        });
  }

  deletePost(post) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else {
            alert('Unexpected error occured.');
          }
        });
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      },
        (error: AppError) => {
        if (error instanceof BadInputError) {
            // Do something with the error
           // this.form.setErrors(error.orignalError());
        }
      });
  }

}
