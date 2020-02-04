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

  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem("session"));
    if (this.user === null) this.router.navigate(["signin"]);
    else if (this.user.IDENTIFICACION !== "admin")
      this.router.navigate(["user"]);
  }

  ngOnInit() {}

  signout() {
    localStorage.removeItem("session");
    this.router.navigate(["signin"]);
  }

  newCourse() {}
}
