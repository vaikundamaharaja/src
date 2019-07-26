import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponentComponent } from './task-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskServices } from '../task-services/TaskServices';
import { HttpClientTestingModule } from '@angular/common/http/testing'
describe('TaskComponentComponent', () => {
  let component: TaskComponentComponent;
  let fixture: ComponentFixture<TaskComponentComponent>;
  let service: TaskServices;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponentComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule 
      ],
      providers:[
        TaskServices
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponentComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TaskServices);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should close success Popup',async(()=>{
    component.onAddSuccessClose();
    expect(component.onAddSuccessClose).toBeTruthy();
    }));
    
    it('Should add task',async(()=>{
      component.addTaskForm.controls['task'].setValue('T001');
      component.addTaskForm.controls['priority'].setValue('5');
      component.addTaskForm.controls['taskName'].setValue('Software install');
      component.addTaskForm.controls['parentTaskID'].setValue('P001');
      component.addTaskForm.controls['startDate'].setValue('21-07-2019');
      component.addTaskForm.controls['endDate'].setValue('25-07-2019');
      expect(component.addTask).toBeTruthy();
      }));
    
});
