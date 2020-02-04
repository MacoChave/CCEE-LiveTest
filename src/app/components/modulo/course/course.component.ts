import { Component, OnInit } from "@angular/core";
import { Course } from "src/app/models/course";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  courses: Course[];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getAllCourse().subscribe(res => (this.courses = res));
  }

  viewCourse(course: Course) {}

  editCourse(course: Course) {}

  deleteCourse(course: Course) {
    this.courseService.deleteCourse(course.id);
  }
}
