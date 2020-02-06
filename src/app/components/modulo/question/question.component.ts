import { Component, OnInit } from "@angular/core";
import { Question } from "src/app/models/question";
import { User } from "src/app/models/user";
import { QuestionService } from "src/app/services/question.service";
import { Course } from "src/app/models/course";
import { MatDialog } from "@angular/material";
import { NewQuestionComponent } from "../new-question/new-question.component";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  questions: Question[];
  course: Course;
  user: User;

  constructor(
    private questionService: QuestionService,
    private dialog: MatDialog
  ) {
    this.user = JSON.parse(localStorage.getItem("session"));
    this.course = JSON.parse(localStorage.getItem("course"));
    console.log("COURSE", this.course);
    this.questionService.getAllQuestion(this.course.id).subscribe(res => {
      this.questions = res;
    });
  }

  ngOnInit() {}

  /* SOLO PARA ADMIN */
  newQuestion() {
    this.dialog.open(NewQuestionComponent, {
      data: {
        DATA: null,
        STATUS: "ADD"
      },
      width: "70vw",
      minHeight: "30vh"
    });
  }

  editQuestion(question: Question) {
    this.dialog.open(NewQuestionComponent, {
      data: {
        DATA: question,
        STATUS: "EDIT"
      },
      width: "70vw",
      minHeight: "30vh"
    });
  }

  deleteQuestion(question: Question) {
    this.questionService.deleteQuestion(question.id);
  }

  /* PARA TODOS LOS USUARIOS */
  viewQuestion(question: Question) {}

  answerQuestion(question: Question) {}
}
