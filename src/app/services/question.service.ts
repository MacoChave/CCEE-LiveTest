import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Question } from "../models/question";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
  courses: Observable<Question[]>;
  courseCollection: AngularFirestoreCollection<Question>;

  constructor(private afs: AngularFirestore) {}

  getOneQuestion(id: string): Observable<Question> {
    return this.afs.doc<Question>(`question/${id}`).valueChanges();
  }

  getAllQuestion(course: string): Observable<Question[]> {
    return this.afs
      .collection("question")
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Question;
            const id = a.payload.doc.id;
            if (data.COURSE === course) return { id, ...data };
          })
        )
      );
  }

  addQuestion(question: Question) {
    this.afs.collection<Question>("question").add(question);
  }

  updateQuestion(question: Question) {
    this.afs.doc(`question/${question.id}`).update(question);
  }

  deleteQuestion(id: string) {
    this.afs.doc(`question/${id}`).delete();
  }
}
