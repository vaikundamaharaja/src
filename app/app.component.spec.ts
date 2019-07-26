import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TaskComponentComponent } from './task/task-component/task-component.component';
import { UpdateTaskComponent } from './task/view-task/update-task/update-task.component';
import { ViewTaskComponent } from './task/view-task/view-task.component';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { TaskServices } from './task/task-services/TaskServices';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {

  beforeEach(async(() => {
    const routes: Routes = [
      { path: 'addTask', component:TaskComponentComponent},
      { path: 'viewTask', component:ViewTaskComponent},
      { path: 'updateTasks', component:UpdateTaskComponent},
     ];
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        TaskComponentComponent,
        UpdateTaskComponent,
        ViewTaskComponent
      ],
      providers:[
        TaskServices,
        {provide: APP_BASE_HREF, useValue:'/'}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Task Manager'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Task Manager');
  });

  /*it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to task-manager-ui-app!');
  });*/
});
