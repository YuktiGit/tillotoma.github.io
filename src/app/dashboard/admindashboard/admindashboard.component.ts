import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/Task';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
})
export class AdmindashboardComponent implements OnInit {
  tasks: Task[] = TASKS;
  color: string = 'green';

  tId = 1;
  textname = '';
  duedate = '';
  reminder = false;

  constructor() {}

  ngOnInit(): void {}

  addTask(tName: string, duedate: string, reminder: boolean) {
    this.tId = this.tId + 1;
    let obj = {
      id: this.tId,
      text: this.textname,
      day: this.duedate,
      reminder: this.reminder,
    };
    this.tasks.push(obj);
    this.textname = '';
    this.duedate = '';
    this.reminder = false;
  }
}
