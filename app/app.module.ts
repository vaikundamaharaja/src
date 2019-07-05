import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponentComponent } from './task/task-component/task-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskServices } from './task/task-services/TaskServices';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { UpdateTaskComponent } from './task/view-task/update-task/update-task.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponentComponent,
    ViewTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [TaskServices],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
