import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'go-bananas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];

  selectedTask = null;
  priorityColor(currentTask) {
    if (currentTask.priority == 3) {
      return "bg-danger";
    } else if (currentTask.priority == 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  editTask(clickedTask) {
    console.log(clickedTask);
    //method will accept a Task Object from the tasks array
    //and set the selectedTask to that Object
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    //because the selectedTask is set to null, it won't show due to the *ngIf statemen
    this.selectedTask = null;
  }
}
