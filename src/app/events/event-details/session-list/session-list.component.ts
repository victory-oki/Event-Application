import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../../shared/event.model';
import { AuthService } from 'src/app/user/auth.service';
import { VoterServiceService } from '../voter-service.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges,OnInit {

  constructor(private auth:AuthService, private voterService:VoterServiceService) { }

 @Input() sessions:ISession[];
 @Input() filterBy:string;
 @Input() sortBy:string;
 isAuthenticated:boolean
 visibleSessions:ISession[];

  ngOnChanges() {
    if(this.sessions){
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'? this.visibleSessions.sort(sortByNameAsc):this.visibleSessions.sort(sortByVotesDesc);
    }
  }
  ngOnInit(){
    this.isAuthenticated = this.auth.isAuthenticated();
  }
  userHasvoted(session:ISession){
    return this.voterService.userHasVoted(session,this.auth.currentUser.userName)
  }

  toggleVote(session:ISession){
    if(this.userHasvoted(session)){
      this.voterService.deleteVoter(session,this.auth.currentUser.userName);
    }
    else{
      this.voterService.addVoter(session,this.auth.currentUser.userName);
    }
    if(this.sortBy ==='votes'){this.visibleSessions.sort(sortByVotesDesc)}
  }

  filterSessions(filterBy: string) {
    if(filterBy === 'all'){
      this.visibleSessions = this.sessions.slice(0);
    }
    else{
      this.visibleSessions = this.sessions.filter((session)=>{
        return session.level.toLocaleLowerCase() === filterBy
      })
    }
  }

}
function sortByNameAsc(s1:ISession,s2:ISession){
  if(s1.name>s2.name){
    return 1
  }
  else if(s1.name===s2.name){
    return 0
  }
  else{
    return -1
  }
}
function sortByVotesDesc(s1:ISession,s2:ISession){
  return s2.voters.length - s1.voters.length
}