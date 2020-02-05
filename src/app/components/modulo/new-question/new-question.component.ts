import { Component, OnInit, Inject } from "@angular/core";
import { Question } from "src/app/models/question";
import { User } from "src/app/models/user";
import { Course } from "src/app/models/course";
import { QuestionService } from "src/app/services/question.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-new-question",
  templateUrl: "./new-question.component.html",
  styleUrls: ["./new-question.component.css"]
})
export class NewQuestionComponent implements OnInit {
  user: User;
  course: Course;
  question: Question = {
    CORRECT: false,
    SENTENCE: ""
  };

  constructor(
    private questionService: QuestionService,
    private dialogRef: MatDialogRef<NewQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.course = JSON.parse(localStorage.getItem("course"));
    this.user = JSON.parse(localStorage.getItem("session"));
    this.question = data.STATUS === "EDIT" ? data.DATA : this.question;
    console.log(data);
  }

  ngOnInit() {}

  sendQuestion() {
    this.question.AUTHOR = this.user.IDENTIFICACION;
    this.question.COURSE = this.course.id;

    if (this.data.STATUS === "EDIT") {
      this.questionService.updateQuestion(this.question);
    } else {
      this.questionService.addQuestion(this.question);
    }
    this.dialogRef.close();
  }
}
