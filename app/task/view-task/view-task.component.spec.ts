import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskComponent } from './view-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskServices } from '../task-services/TaskServices';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';
import { TaskComponentComponent } from '../task-component/task-component.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskModel } from '../task-model/TaskModel';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;
  let service: TaskServices;

  beforeEach(async(() => {
        TestBed.configureTestingModule({
      declarations: [ ViewTaskComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes( [
          { path: 'viewTask', component:ViewTaskComponent},
           ]),
      ],
      providers:[
        TaskServices
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TaskServices);
    component.taskModel ={
      taskID: "T001",
      priority: 9,
      task: "Install",
      parentID: 'P001',
      startDate: '27-07-2019',
      endDate: '27-07-2019'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should close Delete Popup',async(()=>{
    component.closeDeletePopup();
    expect(component.closeDeletePopup).toBeTruthy();
    }));
    it('Should close success Delete Popup',async(()=>{
    component.onSuccessDeleteClose();
    expect(component.onSuccessDeleteClose).toBeTruthy();
    }));
    it('Should close success Popup',async(()=>{
      component.deleteTask();
    expect(component.deleteTask).toBeTruthy();
    }));
    it('Should close update success Popup',async(()=>{
    component.onSuccessUpdateClose();
    expect(component.onSuccessUpdateClose).toBeTruthy();
    }));
   it('Should close Popup',async(()=>{
     component.cancel();
     expect(component.cancel).toBeTruthy();
     }));

     it('Should call Show Update Task',async(()=>{
       component.showUpdateTask(component.taskModel);
      expect(component.showUpdateTask).toBeTruthy();
      }));
    it('Should search task',async(()=>{
      component.updateTaskForm.controls['task'].setValue('T001');
      component.updateTaskForm.controls['priority'].setValue('5');
      component.updateTaskForm.controls['taskName'].setValue('Software install');
      component.updateTaskForm.controls['parentTaskID'].setValue('P001');
      component.updateTaskForm.controls['startDate'].setValue('21-07-2019');
      component.updateTaskForm.controls['endDate'].setValue('25-07-2019');
      expect(component.searchTask).toBeTruthy();
      }));
});
