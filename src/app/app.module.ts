import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";

import { MaterialModule } from "./material/material.module";
import { FirebaseModule } from "./firebase/firebase.module";

import { SigninComponent } from "./components/signin/signin.component";
import { AdminComponent } from "./components/admin/admin.component";
import { UserComponent } from "./components/user/user.component";
import { CourseComponent } from "./components/modulo/course/course.component";
import { QuestionComponent } from "./components/modulo/question/question.component";
import { environment } from "src/environments/environment";
import { NewCourseComponent } from "./components/modulo/new-course/new-course.component";
import { NewQuestionComponent } from "./components/modulo/new-question/new-question.component";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AdminComponent,
    UserComponent,
    CourseComponent,
    QuestionComponent,
    NewCourseComponent,
    NewQuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FirebaseModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "ccee-test")
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewCourseComponent, NewQuestionComponent]
})
export class AppModule {}
