import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import {  ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:IEvent
  eventId:number
  addMode: boolean;
  filterBy:string = 'all';
  sortBy:string = 'name';
  constructor(private eventService:EventService, private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.forEach((params:Params)=>{
        this.event = this.router.snapshot.data['event']
        this.addMode = false;
    })

  }
  addSession(){
    this.addMode = true;
  }
  sessionSave(session:ISession){
    let id = Math.max.apply(null,this.event.sessions.map((e)=>e.id));
    session.id = id
    this.event.sessions.push(session)
    this.eventService.saveEvent(this.event).subscribe()
    this.addMode = false
  }
  cancelAddSession(){
    this.addMode = false
  }
}
