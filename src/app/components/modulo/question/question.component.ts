import { Component, OnInit } from "@angular/core";
import { Question } from "src/app/models/question";
import { User } from "src/app/models/user";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  user: User;
  questions: Question[] = [
    {
      AUTHOR: "202020202",
      CORRECT: false,
      COURSE: "qwerty",
      SENTENCE: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      AUTHOR: "201010101",
      CORRECT: true,
      COURSE: "qwerty",
      SENTENCE: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      AUTHOR: "200000000",
      CORRECT: true,
      COURSE: "qwerty",
      SENTENCE: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      AUTHOR: "",
      CORRECT: false,
      COURSE: "qwerty",
      SENTENCE: ``
    },
    {
      AUTHOR: "201717171",
      CORRECT: true,
      COURSE: "qwerty",
      SENTENCE: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      AUTHOR: "",
      CORRECT: false,
      COURSE: "qwerty",
      SENTENCE: ``
    }
  ];

  constructor() {
    this.user = JSON.parse(localStorage.getItem("session"));
  }

  ngOnInit() {}

  viewQuestion(question: Question) {}

  answerQuestion(question: Question) {}
}
