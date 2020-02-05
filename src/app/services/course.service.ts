import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Course } from "../models/course";
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  courses: Observable<Course[]>;
  courseCollection: AngularFirestoreCollection<Course>;

  constructor(private afs: AngularFirestore) {}

  getOneCourse(id: string): Observable<Course> {
    return this.afs.doc<Course>(`course/${id}`).valueChanges();
  }

  getAllCourse(): Observable<Course[]> {
    return this.afs
      .collection("course")
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Course;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  addCourse(course: Course) {
    this.afs.collection<Course>("course").add(course);
  }

  updateCourse(course: Course) {
    this.afs.doc(`course/${course.id}`).update(course);
  }

  deleteCourse(id: string) {
    this.afs.doc(`course/${id}`).delete();
  }
}
