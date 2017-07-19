import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { VoteComponent } from './vote.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { PanelComponent } from './panel/panel.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CoursesComponent } from './courses/courses.component'
import { HeartComponent } from './heart/heart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ViewSelectorComponent } from './view-selector/view-selector.component';
import { InputFormatDirective } from './input-format.directive';
import { FormattedInputComponent } from './formatted-input/formatted-input.component';
import { PostsComponent } from './posts/posts.component';
import {AppErrorHandler} from './common/app-error-handler';
import {ErrorHandler} from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { RouterModule } from '@angular/router';
import { GithubFollowersService } from './services/github-followers.service';
import { ExamplesComponent } from './examples/examples.component';


@NgModule({

  declarations: [
    AppComponent,
    AuthorsComponent,
    FavoriteComponent,
    HeartComponent,
    VoteComponent,
    ContactFormComponent,
    AutoGrowDirective,
    PanelComponent,
    ZippyComponent,
    CoursesComponent,
    SignupFormComponent,
    ViewSelectorComponent,
    InputFormatDirective,
    FormattedInputComponent,
    PostsComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers/:id',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'profile/:username',
        component: GithubProfileComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'examples',
        component: ExamplesComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [{provide: ErrorHandler, useClass: AppErrorHandler},
    GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
