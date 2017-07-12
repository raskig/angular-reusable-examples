
import {Component} from '@angular/core';
import {CourseService} from './course.service';

@Component({
    selector: 'courses',//css will find this selector. this is for style
    template:
    `<h2>{{tittle}}</h2>
    {{title}}
    <input #theTittle (keyup.enter)="onKeyUp(theTittle.value)" type="text" autoGrow [(ngModel)]="tittle"/>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>`, //this is the markup
    providers: [CourseService]
})
export class CoursesComponent{
    tittle: string = 'This is the courses page tittle';
    courses;

    onKeyUp(theTittle) {
      console.log('Enter was pressed.' + theTittle);
    }

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}
