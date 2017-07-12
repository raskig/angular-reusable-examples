import {Component, Input} from '@angular/core';

@Component({
    selector: 'heart',
    templateUrl: 'heart.template.html',
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }

        .highlighted {
            color: deeppink;
        }
    `]
})
export class HeartComponent{

    /*
    @Input('total-likes') totalLikes = 0;
    @Input('is-liked') iLike = false;

    onClick(){
        console.log("Clicked..");
        console.log("is liked?" + this.iLike);
        console.log("Total?" + this.totalLikes);
        this.iLike = !this.iLike;
        if(this.iLike){
            this.totalLikes = this.totalLikes -1;
        }
        else{
            this.totalLikes = this.totalLikes +1;
        }
        //this.totalLikes = (this.isLiked ? 1 : -1);
        console.log("After is liked?" + this.iLike);
        console.log("After Total?" + this.totalLikes);
    }
    */

    @Input() totalLikes : number = 0;
    @Input() iLike = false;

    onClick(){
        console.log("iLike before" + this.iLike);
        console.log("total before" + this.totalLikes);
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }

}
