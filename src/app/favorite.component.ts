import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: 'favorite.template.html',
    styleUrls: ['favorite.component.css']
})
export class FavoriteComponent{
    @Input('is-favorite') isFavorite;

    @Output('favorite-change-event') change = new EventEmitter();

    onClick(){
        console.log("Clicked..");
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
    }
}
