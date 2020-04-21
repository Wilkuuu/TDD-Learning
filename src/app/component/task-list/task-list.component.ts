import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskStatuses = { undone: 0, done: 1 };

  constructor() {
  }

  taskList: Task[] = [];


  ngOnInit() {
  }

  addTask(task) {
    const newTask: Task = {name: task, status: this.taskStatuses.undone};
    console.log(newTask);
    this.taskList.push(newTask);
    }
}
