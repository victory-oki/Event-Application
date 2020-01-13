import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService, ISession } from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm:string = '';
  foundSessions:ISession[];
  constructor(private auth:AuthService, private eventService:EventService) { }

  ngOnInit() {
  }
  searchSessions(searchTerm:string){
    this.eventService.searchSessions(searchTerm).subscribe(
      (sessions)=> {
        this.foundSessions = sessions;
        // console.log(this.foundSessions)  
      }
    )
  }

}
