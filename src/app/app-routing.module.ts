import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './dashboard/mainpage/mainpage.component';
import { StudentdashboardComponent } from './dashboard/studentdashboard/studentdashboard.component';
import { FacultydashboardComponent } from './dashboard/facultydashboard/facultydashboard.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { TaskItemComponent } from './dashboard/task-item/task-item.component';

const routes: Routes = [
  { path: 'mainpage', component: MainpageComponent },
  { path: 'studentdashboard', component: StudentdashboardComponent },
  { path: 'facultydashboard', component: FacultydashboardComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'taskitem', component: TaskItemComponent },
  { path: '', redirectTo: '/taskitem', pathMatch: 'full' },
  { path: '**', component: TaskItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
