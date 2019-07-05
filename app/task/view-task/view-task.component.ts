import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskModel } from '../task-model/TaskModel';
import { TaskServices } from '../task-services/TaskServices';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  @Output() showPopup:boolean

  searchTaskForm =  this.fb.group ({
    task:[''],
    parentTask:[''],
    priorityFrom:[''],
    priorityTo: [''],
    startDate:[''],
    endDate:['']

  });

  tasksModel: any=[];
  constructor(private fb: FormBuilder, private taskServices: TaskServices) { }

  ngOnInit() {
  }

  searchTask(){
    this.tasksModel =[];
    let task: string = this.searchTaskForm.controls.task.value;
    this.taskServices.getAllTasks().subscribe((data: {})=>{
      
      this.tasksModel = data;
     // console.log(this.tasksModel);
    });
  }
  updateTask(task:TaskModel){
   // console.log(task);
  }

  onOpenPopup(){

  }

}
