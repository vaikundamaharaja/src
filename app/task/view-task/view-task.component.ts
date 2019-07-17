import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskModel } from '../task-model/TaskModel';
import { TaskServices } from '../task-services/TaskServices';
import { ActivatedRoute, Router } from '@angular/router';

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
  updateTaskForm = this.fb.group ({
    task:[''],
    priority:[''],
    taskName: [''],
    parentTaskID:[''],
    startDate:[''],
    endDate:['']
  });
  taskModel: TaskModel = new TaskModel();
  tasksModel: any=[];
  taskID: string="";
  priority: number =0;
  constructor(private fb: FormBuilder, private taskServices: TaskServices , private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  searchTask(){
    this.tasksModel =[];
    let task: string = this.searchTaskForm.controls.task.value;
    let parentTask: string = this.searchTaskForm.controls.parentTask.value;
    let priorityFrom: string = this.searchTaskForm.controls.priorityFrom.value;
    let priorityTo: string = this.searchTaskForm.controls.priorityTo.value;
    let startDate: string = this.searchTaskForm.controls.startDate.value;
    let endDate: string = this.searchTaskForm.controls.endDate.value;

    if(task==''&& parentTask==''&& priorityFrom=='' && priorityTo == '' && startDate =='' && endDate == ''){
       this.taskServices.getAllTasks().subscribe((data: {})=>{
            this.tasksModel = data;
    });
    }
    if(task!=''){
      this.taskServices.findByTaskID(task).subscribe((data: {})=>{
           this.tasksModel = data;
   });
   return;
  }
   if(priorityFrom!='' && priorityTo != ''){
    this.taskServices.findTasksByPriority(priorityFrom, priorityTo).subscribe((data: {})=>{
         this.tasksModel = data;
 });
 return;
}
if(parentTask != ''){
  this.taskServices.findTasksByParentID(parentTask).subscribe((data: {})=>{
       this.tasksModel = data;
});
return;
}
if(startDate!='' && endDate != ''){
  this.taskServices.findTasksByDate(startDate, endDate).subscribe((data: {})=>{
       this.tasksModel = data;
});
return;
}
  }

  showUpdateTask(task: TaskModel){
   // console.log(task);
   document.getElementById('updateTask').style.display='block';
   this.updateTaskForm.controls['task'].setValue(task.taskID);
   this.priority=task.priority;
   this.updateTaskForm.controls['priority'].setValue(task.priority);
   this.updateTaskForm.controls['taskName'].setValue(task.task)
   this.updateTaskForm.controls['parentTaskID'].setValue(task.parentID);
   this.updateTaskForm.controls['startDate'].setValue(task.startDate);
   this.updateTaskForm.controls['endDate'].setValue(task.endDate);
  }
  cancel(){
    document.getElementById('updateTask').style.display='none';
  }
  updateTask(){
    document.getElementById('updateTask').style.display='none';
    this.taskID= this.updateTaskForm.controls.task.value;
    this.taskModel.taskID = this.updateTaskForm.controls.task.value;
    this.taskModel.task = this.updateTaskForm.controls.taskName.value;
    this.taskModel.priority = this.updateTaskForm.controls.priority.value;
    this.taskModel.parentID = this.updateTaskForm.controls.parentTaskID.value;
    this.taskModel.startDate = this.updateTaskForm.controls.startDate.value;
    this.taskModel.endDate = this.updateTaskForm.controls.endDate.value;
    this.taskServices.updateTask(this.taskModel, this.taskID).subscribe((res)=>{
      console.log("Update the Task");
});;
document.getElementById('updateSuccess').style.display='block';
  }
onSuccessUpdateClose(){
  document.getElementById('updateSuccess').style.display='none';
  this.searchTask();
}

showDeleteTask(task: TaskModel){
    this.taskID = task.taskID;
    document.getElementById('deleteTask').style.display='block';
}
deleteTask(){
  document.getElementById('deleteTask').style.display='none';
  this.taskServices.deleteTask(this.taskID).subscribe((res)=>{
    console.log("Delete the dask");
});;
document.getElementById('deleteSuccess').style.display='block';
}
onSuccessDeleteClose(){
  document.getElementById('deleteSuccess').style.display='none';
  this.searchTask();
}

closeDeletePopup(){
  document.getElementById('deleteTask').style.display='none';
}
}
