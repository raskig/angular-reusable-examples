import { GithubFollowersService } from '../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
    // straight-foreward approach:
    // this.route.paramMap.subscribe(params => {...} );

    // this.route.queryParamMap.subscribe((params => {...});

    // or:
    // const id = this.route.snapshot.paramMap.get('id');

    // or:
    // const page = this.route.snapshot.queryParamMap.get('page');

    // Compined solution:

    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .switchMap(combined => { // important: use switch map not map here!!
        const id = combined[0].get('id');
        const page = combined[1].get('page');
        // normally here we use id and pag to get all the followers for the page.

        return this.service.getAll();
      })
      .subscribe(followers => {
        this.followers = followers;
      });
  }
}
