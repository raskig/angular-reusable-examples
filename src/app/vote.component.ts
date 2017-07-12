import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector: 'vote',
    template: `
        <div class="voter">
        <i class="glyphicon glyphicon-menu-up vote-button"
           [class.highlighted]="myVote==1"
           (click)="onUpClick()">
        </i>
        <span>{{ voteCount + myVote }}</span>
        <i class="glyphicon glyphicon-menu-down vote-button"
           [class.highlighted]="myVote==-1"
           (click)="onDownClick()">
        </i>
        </div>`,
    styles: [`
        .voter {
            width: 20px;
            text-align: center;
            color: #999;
        }

        .vote-count {
            font-size: 1.2em;
        }

        .vote-button {
            cursor: pointer;
        }

        .highlighted {
            font-weight: bold;
            color: orange;
        }
    `]
})
export class VoteComponent{
    @Input() voteCount : number = 0;
    @Input() myVote = 0;
    @Output() vote = new EventEmitter();

    onUpClick(){
        if(this.myVote ==1){
            return;
        }
        this.myVote++;
        console.log("Voting up");
        this.vote.emit({ myVote: this.myVote });
    }

    onDownClick(){
        if(this.myVote ==-1){
            return;
        }
        this.myVote--;
        console.log("Voting down");
        this.vote.emit({ myVote: this.myVote });
    }
}
