import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css'],
})
export class StudentdashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  tasks: Task[] = TASKS;
  color: string = 'green';

  tId = 1;
  textname = '';
  duedate = '';
  reminder = false;

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
