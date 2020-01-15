import { Injectable } from '@angular/core';
import { ISession } from '../shared/event.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoterServiceService {
 
  constructor(private http:HttpClient) { }
  deleteVoter(eventId:number,session:ISession,voterName:string){
    session.voters = session.voters.filter((voter)=>voter != voterName)
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
    this.http.delete(url).pipe(catchError(this.handleError)).subscribe()
  }
  addVoter(eventId:number,session:ISession,voterName:string){
    let options ={headers:new HttpHeaders({'Content-Type':'application/json'})}
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
    this.http.post(url,{},options).pipe(catchError(this.handleError))
    .subscribe()
    // session.voters.push(voterName)
  }
  userHasVoted(session:ISession,voterName:string){
    return session.voters.some(voter=>voter === voterName)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
