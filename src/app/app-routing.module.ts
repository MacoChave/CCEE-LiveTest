import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./components/signin/signin.component";
import { AdminComponent } from "./components/admin/admin.component";
import { UserComponent } from "./components/user/user.component";
import { CourseComponent } from "./components/modulo/course/course.component";
import { QuestionComponent } from "./components/modulo/question/question.component";
import { ViewQuestionComponent } from "./components/view-question/view-question.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/signin",
    pathMatch: "full"
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "course",
        component: CourseComponent,
        outlet: "admin"
      }
    ]
  },
  {
    path: "user",
    component: UserComponent,
    children: [
      {
        path: "question",
        component: QuestionComponent,
        outlet: "user"
      }
    ]
  },
  {
    path: "question/:id",
    component: ViewQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
