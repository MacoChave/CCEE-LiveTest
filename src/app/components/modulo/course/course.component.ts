import { Component, OnInit } from "@angular/core";
import { Course } from "src/app/models/course";
import { CourseService } from "src/app/services/course.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { NewCourseComponent } from "../new-course/new-course.component";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  courses: Course[];

  constructor(
    private courseService: CourseService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.courseService.getAllCourse().subscribe(res => (this.courses = res));
  }

  viewCourse(course: Course) {
    localStorage.setItem("course", JSON.stringify(course));
    this.router.navigate(["user"]);
  }

  editCourse(course: Course) {
    this.dialog.open(NewCourseComponent, {
      data: {
        DATA: course,
        STATUS: "EDIT"
      },
      width: "60vw",
      height: "30vh"
    });
  }

  deleteCourse(course: Course) {
    this.courseService.deleteCourse(course.id);
  }
}
