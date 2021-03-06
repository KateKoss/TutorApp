import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LessonComponent} from "../components/lesson/lesson.component";
import {HomeComponent} from "../components/home/home.component";
import {StudentComponent} from "../components/student/student.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lessons', component: LessonComponent },
  { path: 'students', component: StudentComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
