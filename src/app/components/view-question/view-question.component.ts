import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { QuestionService } from "src/app/services/question.service";
import { Question } from "src/app/models/question";
import { User } from "src/app/models/user";
import { Course } from "src/app/models/course";
import { ActivatedRoute } from "@angular/router";
import { MatSlideToggleChange } from "@angular/material";

@Component({
  selector: "app-view-question",
  templateUrl: "./view-question.component.html",
  styleUrls: ["./view-question.component.css"]
})
export class ViewQuestionComponent implements OnInit {
  question: Question = {
    ANSWER: ""
  };
  user: User;
  course: Course;
  constructor(
    private location: Location,
    private questionService: QuestionService,
    private router: ActivatedRoute
  ) {
    this.user = JSON.parse(localStorage.getItem("session"));
    this.course = JSON.parse(localStorage.getItem("course"));
    router.params.subscribe(params => {
      questionService.getOneQuestion(params.id).subscribe(res => {
        this.question = res;
        this.question.id = params.id;
        console.log("QUESTION", this.question);
      });
    });
  }

  ngOnInit() {}

  updateQuestion() {
    this.question.AUTHOR = this.user.IDENTIFICACION;
    this.questionService.updateQuestion(this.question);
  }

  goBack() {
    this.location.back();
  }
  onChange(event: MatSlideToggleChange) {
    this.question.CORRECT = event.checked;
    this.questionService.updateQuestion(this.question);
  }
}
