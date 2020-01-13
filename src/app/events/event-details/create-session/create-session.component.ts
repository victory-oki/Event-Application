import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession } from '../../shared/event.model';
import { restrictedWords } from '../../shared/restricted-words.validator';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  newSessionForm:FormGroup
  name:FormControl
  presenter:FormControl
  duration:FormControl
  level:FormControl
  abstract:FormControl
  @Output() onSessionSave = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()
  constructor() { }

  ngOnInit() {
    this.name = new FormControl("",Validators.required)
    this.presenter = new FormControl("",Validators.required)
    this.duration = new FormControl("",Validators.required)
    this.level = new FormControl("",Validators.required)
    this.abstract = new FormControl("",[Validators.required,
      Validators.maxLength(400),
      restrictedWords(['fuck',"idiot","tramp"])])

    this.newSessionForm = new FormGroup({
      name:this.name,
      presenter:this.presenter,
      duration:this.duration,
      level:this.level,
      abstract:this.abstract
    })
  }
  saveSession(formValues){
    let session:ISession = {
      id:undefined,
      name:formValues.name,
      presenter:formValues.presenter,
      duration:+formValues.duration,
      level:formValues.level,
      abstract:formValues.abstract,
      voters:[]
    }
    console.log(session)
    this.onSessionSave.emit(session)
  }
  cancel(){
    this.cancelAddSession.emit()
  }

}
