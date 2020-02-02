import { Component, OnInit } from "@angular/core";
import { Course } from "src/app/models/course";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  courses: Course[] = [
    {
      CODIGO: "asdfhh",
      NOMBRE: "Curso 1"
    },
    {
      CODIGO: "qwerty",
      NOMBRE: "Curso 2"
    },
    {
      CODIGO: "zxcvbn",
      NOMBRE: "Curso 3"
    },
    {
      CODIGO: "poiuyt",
      NOMBRE: "Curso 4"
    },
    {
      CODIGO: "ñlkjhg",
      NOMBRE: "Curso 5"
    },
    {
      CODIGO: "mnbvcx",
      NOMBRE: "Curso 6"
    }
  ];

  constructor() {}

  ngOnInit() {}

  viewCourse(course: Course) {}
}
