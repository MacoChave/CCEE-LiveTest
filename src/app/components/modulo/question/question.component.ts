import { Component, OnInit } from "@angular/core";
import { Question } from "src/app/models/question";
import { User } from "src/app/models/user";
import { QuestionService } from "src/app/services/question.service";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  user: User;
  questions: Question[];

  constructor(private questionService: QuestionService) {
    this.user = JSON.parse(localStorage.getItem("session"));
  }

  ngOnInit() {
    this.questionService
      .getAllQuestion("")
      .subscribe(res => (this.questions = res));
  }

  viewQuestion(question: Question) {}

  answerQuestion(question: Question) {}
}
