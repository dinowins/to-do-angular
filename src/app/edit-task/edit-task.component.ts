import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() childSelectedTask: Task;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
