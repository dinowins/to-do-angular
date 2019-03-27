import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonClicked(taskToEdit: Task) {
   this.clickSender.emit(taskToEdit);
 }
  constructor() { }

  ngOnInit() {
  }

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
  filterByCompleteness: string = "incompleteTasks";
  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }
  toggleDone(clickedTask: Task, setCompleteness: boolean) {
   clickedTask.done = setCompleteness;
 }

}
