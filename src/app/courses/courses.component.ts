import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';

@Component({
  selector: 'bootstrap-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService]
})
export class CoursesComponent implements OnInit {

  tittle = 'This is the courses page tittle';
  courses;

  onKeyUp(theTittle) {
    console.log('Enter was pressed.' + theTittle);
  }

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  ngOnInit() {
  }

}
