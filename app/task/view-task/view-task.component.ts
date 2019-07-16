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

  tasksModel: any=[];
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
  updateTask(task:TaskModel){
   // console.log(task);
  }

  onOpenPopup(event){
    this.showPopup =true;
   /* this.router.navigate(['/','updateTasks']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });*/
  }

}
