import { Component, OnInit, Inject } from "@angular/core";
import { CourseService } from "src/app/services/course.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Course } from "src/app/models/course";

@Component({
  selector: "app-new-course",
  templateUrl: "./new-course.component.html",
  styleUrls: ["./new-course.component.css"]
})
export class NewCourseComponent implements OnInit {
  course: Course = { NOMBRE: "" };
  constructor(
    private courseService: CourseService,
    private dialogRef: MatDialogRef<NewCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.course = this.data.STATUS === "EDIT" ? this.data.DATA : this.course;
  }

  ngOnInit() {}

  sendCourse() {
    if (this.data.STATUS === "EDIT") {
      this.courseService.updateCourse(this.course);
    } else {
      this.courseService.addCourse(this.course);
    }
    this.dialogRef.close();
  }
}
