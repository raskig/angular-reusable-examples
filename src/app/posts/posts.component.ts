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
        .subscribe(posts => this.posts = posts);
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
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
    const index = this.posts.indexOf(post); // Optimistic delete.
    this.posts.splice(index, 1);
    this.service.delete(post.id)
      .subscribe(
        null, // We don't care about positive response
        (error: AppError) => {
          this.posts.splice(0, 0, post); // Rollback Optimistic delete

          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else {
            throw error
          };
        });
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    this.posts.splice(0, 0, post); // For optimistic update.

    input.value = '';
    this.service.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;
        // Pessimistic:  this.posts.splice(0, 0, post);
        console.log(newPost);
      },
        (error: AppError) => {

        // Rollback Optimistic update:
          this.posts.splice(0, 1);

        if (error instanceof BadInputError) {
            // Do something with the error
           // this.form.setErrors(error.orignalError());
        } else {
          throw error
        };
      });
  }

}
