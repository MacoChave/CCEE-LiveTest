import { Component, OnInit } from "@angular/core";
import { Course } from "src/app/models/course";
import { User } from "src/app/models/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  courses: Course[] = [
    {
      CODIGO: 0,
      NOMBRE: "Curso 1"
    },
    {
      CODIGO: 1,
      NOMBRE: "Curso 2"
    }
  ];
  user: User = {
    ID: "",
    COURSE: ""
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  signin() {
    if (this.user.ID === "admin") {
      localStorage.setItem("session", JSON.stringify(this.user));
      this.router.navigate(["admin"]);
    } else {
      localStorage.setItem("session", JSON.stringify(this.user));
      this.router.navigate(["user"]);
    }
  }
}
