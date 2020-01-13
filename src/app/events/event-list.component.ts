import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector:"event-list",
    templateUrl:"./event-list.component.html",
    styles:[`
        
    `]
}) 

export class EventListComponent implements OnInit{
    events:any[];
    constructor(private eventService:EventService, private route:ActivatedRoute){

    }
    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }
}