import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskModel } from '../task-model/TaskModel';
import { TaskServices } from '../task-services/TaskServices';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.scss']
})
export class TaskComponentComponent implements OnInit {

  addTaskForm = this.fb.group ({
    task:[''],
    priority: [''],
    taskName: [''],
    parentTaskID:[''],
    startDate:[''],
    endDate:['']

  });
  taskModel: TaskModel = new TaskModel();
  taskModels: any =[];
  constructor( private fb: FormBuilder, private taskServices: TaskServices) { }

  ngOnInit() {
  }
  addTask(){
    this.taskModel.taskID = this.addTaskForm.controls.task.value;
    this.taskModel.priority = this.addTaskForm.controls.priority.value;
    this.taskModel.task = this.addTaskForm.controls.taskName.value;
    this.taskModel.parentID = this.addTaskForm.controls.parentTaskID.value;
    this.taskModel.startDate = this.addTaskForm.controls.startDate.value;
    this.taskModel.endDate = this.addTaskForm.controls.endDate.value;
    this.taskServices.addTask(this.taskModel).subscribe((res)=>{
      console.log("Created a customer");
});;

  }
  getAllTasks() {
    this.taskModels = [];
    this.taskServices.getAllTasks().subscribe((data:  {}) => {
      console.log(data);
      this.taskModels = data;
    });
  }

}
