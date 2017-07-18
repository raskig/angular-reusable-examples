import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {NotFoundError} from '../common/not-found-error';
import {AppError} from '../common/app-error';
import {BadInputError} from '../common/bad-input-error';

@Component({
  selector: 'bootstrap-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [
    PostService]
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
      this.service.getAll()
        .subscribe(response => {
        this.posts = response.json();
      });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(response => {
        console.log(response)
        console.log(response);
      },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else {
            throw error
          };
        });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else {
            throw error
          };
        });
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    input.value = '';
    this.service.create(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      },
        (error: AppError) => {
        if (error instanceof BadInputError) {
            // Do something with the error
           // this.form.setErrors(error.orignalError());
        } else {
          throw error
        };
      });
  }

}
