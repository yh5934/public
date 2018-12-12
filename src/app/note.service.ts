import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  create( task,cb ){
    this.http.post( "/api/tasks", task )
    .subscribe( data => cb( data) );
    // server response with this (at the server folder/controllers/Taskcontrollers.js (.jason(task)))
  }
}
