import {Component} from '@angular/core';
import {AuthorService} from './author.service';

@Component({
    selector: 'authors',//css will find this selector. this is for style
    template:
            `<h2>Authors</h2>
    {{title}}
    <ul>
        <li *ngFor="let author of authors">
            {{author}}
        </li>
    </ul>`,// this is the markup
    providers: [AuthorService]
})
export class AuthorsComponent{
    tittle: string = "This is the authors page tittle";
    authors;

    constructor(authorService : AuthorService){
        this.authors = authorService.getAuthors();
    }
}
