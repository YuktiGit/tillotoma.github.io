import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { StudentdashboardComponent } from './dashboard/studentdashboard/studentdashboard.component';
import { FacultydashboardComponent } from './dashboard/facultydashboard/facultydashboard.component';
import { MainpageComponent } from './dashboard/mainpage/mainpage.component';
import { TaskItemComponent } from './dashboard/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    StudentdashboardComponent,
    FacultydashboardComponent,
    MainpageComponent,
    TaskItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
