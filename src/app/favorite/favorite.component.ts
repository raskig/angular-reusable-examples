import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'bootstrap-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite;

  @Output('favorite-change-event') change = new EventEmitter();

  onClick() {
    console.log('Clicked..');
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }


  constructor() { }

  ngOnInit() {
  }

}
