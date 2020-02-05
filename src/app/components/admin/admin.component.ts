import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { NewCourseComponent } from "../modulo/new-course/new-course.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  user: User;

  constructor(private router: Router, private dialog: MatDialog) {
    this.user = JSON.parse(localStorage.getItem("session"));
    if (this.user === null) this.router.navigate(["signin"]);
    else if (this.user.IDENTIFICACION !== "admin")
      this.router.navigate(["user"]);
  }

  ngOnInit() {}

  signout() {
    localStorage.removeItem("session");
    localStorage.removeItem("course");
    this.router.navigate(["signin"]);
  }

  newCourse() {
    this.dialog.open(NewCourseComponent, {
      data: {
        DATA: null,
        STATUS: "ADD"
      },
      width: "60vw",
      height: "30vh"
    });
  }
}
