import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { Router } from "@angular/router";
import { Question } from "src/app/models/question";
import { QuestionService } from "src/app/services/question.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private router: Router, questionService: QuestionService) {
    this.user = JSON.parse(localStorage.getItem("session"));
    if (this.user === null) this.router.navigate(["signin"]);
  }

  ngOnInit() {}

  signout() {
    localStorage.removeItem("session");
    this.router.navigate(["signin"]);
  }
}
