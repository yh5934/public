import { Component, OnInit } from '@angular/core';
import { NoteService } from "../note.service";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  private task;
  // task is being used in new-note.component.html

  constructor(private ns:NoteService) { 
    // injected the service into the component
      this.task = {
          title: " ",
          description: " "
    };

  }

  ngOnInit() {

  }

  createNote(){
      this.ns.create( this.task, ( data ) => {

          console.log(data);
    });
    // when click, passing task to the ns service(NoteServie that we create in the note.service.ts)

      this.task = {
        title: " ",
        description: " "
      };
  }

}
