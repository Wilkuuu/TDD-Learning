import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { Task } from '../task';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  let taskList: Task[];
  let taskStatuses: {};
  let unDoneList;
  let doneList;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    taskList = component.taskList;
    taskStatuses = component.taskStatuses;
    unDoneList = document.getElementById('task-list-undone');
    doneList = document.getElementById('task-list-done');


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have list element,  done and undone task', () => {
    expect(doneList).not.toBeNull();
    expect(unDoneList).not.toBeNull();
    expect(taskList.length).toBeGreaterThanOrEqual(0);
    expect(taskStatuses).not.toBeNull();

  });

  it('should have constrain one task after added one task and display on undone list', () => {
    component.addTask('Task');
    expect(taskList.length).toEqual(1);
    expect(taskList[taskList.length - 1].status).toEqual(0);
  });

  // it('should have button market as done', function() {
  //   const doneButton = document.getElementById('doneButton');
  //   expect(doneButton).not.toBeNull();
  // });


});
