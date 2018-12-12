import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewNoteComponent } from './new-note/new-note.component';

import { FormsModule } from "@angular/forms";
import { NoteService } from "./note.service";
// NoteService is coming from note.service.ts

@NgModule({
  declarations: [
    AppComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
      NoteService
      // this is coming from import { NoteService } from "./note.service"; above the import section
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
