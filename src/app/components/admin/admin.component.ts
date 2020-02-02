import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  user: User;

  constructor(private router: Router) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("session"));
    if (this.user.ID !== "admin") this.router.navigate(["signin"]);
  }

  signout() {
    localStorage.removeItem("session");
    this.router.navigate(["signin"]);
  }

  newCourse() {}
}
