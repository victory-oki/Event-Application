import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
 isDirty:boolean = true
  constructor(private eventService:EventService, private route:Router) { }

  ngOnInit() {
  }
  saveEvent(formValues){
    this.eventService.saveEvent(formValues).subscribe((event)=>{
      this.isDirty = false;
      this.route.navigate(['events'])
    });
  }
}
