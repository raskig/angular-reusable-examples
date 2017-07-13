import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../author.service";

@Component({
  selector: 'bootstrap-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorService]
})
export class AuthorsComponent implements OnInit {
  tittle = 'This is the authors page tittle';
  authors;

  constructor(authorService : AuthorService){
    this.authors = authorService.getAuthors();
  }


  ngOnInit() {
  }

}
