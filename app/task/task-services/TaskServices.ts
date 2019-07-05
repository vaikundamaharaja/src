
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskModel } from '../task-model/TaskModel';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable()
export class TaskServices{
     endpoint = 'http://localhost:9090/TaskManager/';
     httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost:9090',
        'Access-Control-Allow-Credentials' :'true',
        'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept',
      })
      
    };

    

    constructor(private http: HttpClient){}

   /* public addTask(taskModel: TaskModel){
        this.http.post(`${this.url}/addTask`, taskModel);
        console.log(`${this.url}/addTask`);
    }*/
    private extractData(res: Response) {
        let body = res;
        return body || [];
      }
      addTask (taskModel: TaskModel): Observable<any> {
        console.log(taskModel);
        return this.http.post<any>(this.endpoint + 'addTask', JSON.stringify(taskModel), this.httpOptions).pipe(
          tap((taskModel) => console.log(`added product w/ id=${taskModel.parentID}  ${taskModel.task}`)),
          catchError(this.handleError<any>('addProduct'))
        );
      }
    
      getAllTasks(): Observable<any> {
        return this.http.get(this.endpoint + 'getAllTasks').pipe(
          map(this.extractData));
      }
      getTasks(task: string): Observable<any> {
        return this.http.get(this.endpoint + 'getTask/'+`${task}`).pipe(
          map(this.extractData));
      }
      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
      
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
      
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
      
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}