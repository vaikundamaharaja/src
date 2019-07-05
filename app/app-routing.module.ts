import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponentComponent } from './task/task-component/task-component.component';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { UpdateTaskComponent } from './task/view-task/update-task/update-task.component';

const routes: Routes = [
 { path: 'addTask', component:TaskComponentComponent},
 { path: 'viewTask', component:ViewTaskComponent},
 { path: 'updateTasks', component:UpdateTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
