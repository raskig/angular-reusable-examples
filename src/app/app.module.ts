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
    PostsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [{provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
