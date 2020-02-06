import { Component, OnInit } from "@angular/core";
import { Course } from "src/app/models/course";
import { User } from "src/app/models/user";
import { Router } from "@angular/router";
import { CourseService } from "src/app/services/course.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  user: User = {
    id: "",
    IDENTIFICACION: "",
    COURSE: ""
  };
  course: Course;
  courses: Course[];

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getAllCourse().subscribe(res => (this.courses = res));
  }

  signin() {
    if (this.user.IDENTIFICACION === "admin") {
      localStorage.setItem("session", JSON.stringify(this.user));
      this.router.navigate(["admin"]);
    } else {
      localStorage.setItem("session", JSON.stringify(this.user));
      localStorage.setItem("course", JSON.stringify({ id: this.user.COURSE }));
      this.router.navigate(["user"]);
    }
  }
}
