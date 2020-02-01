import { Component, OnInit } from "@angular/core";
import { Course } from "src/app/models/course";

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
  constructor() {}

  ngOnInit() {}
}
