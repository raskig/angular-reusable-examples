import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { FavoriteComponent } from './favorite.component';
import { HeartComponent } from './heart.component';
import { VoteComponent } from './vote.component';
import { ZippyPanel } from './zippy.component';
import { ContactFormComponent } from './contact-form.component';
import { SignUpFormComponent } from './signup-form.component';
import { AutoGrowDirective } from './auto-grow.directive';


@NgModule({

  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    HeartComponent,
    VoteComponent,
    ZippyPanel,
    ContactFormComponent,
    SignUpFormComponent,
    AutoGrowDirective],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
