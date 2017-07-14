import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';

@Component({
  selector: 'bootstrap-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService]
})
export class CoursesComponent implements OnInit {

  tittle = 'NEW COURSE NAME';
  courses;
  courseService= new CourseService();

  onKeyUp(theTittle) {
    console.log('Enter was pressed.' + theTittle);
  }

  loadCourses() {
    this.courses = this.courseService.getCourses();
  }

  onAdd() {
    this.courses.push(this.tittle);
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  ngOnInit() {
  }

}
