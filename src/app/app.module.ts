import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
} from "./events/index";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/error404/error404.component';
import { EventListResolverService } from './events/shared/event-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { JQ_TOKEN } from './common/jQuery.service';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpvoteComponent } from './events/event-details/session-list/upvote/upvote.component';
import { LocationValidatorDirective } from './shared/location-validator.directive';
import {HttpClientModule} from '@angular/common/http';
import { EventResolverService } from './events/event-details/event-resolver.service';
let toastr:Toastr  = window['toastr']
let jQuery:Toastr  = window['$']
@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue:toastr
    },
    {
      provide: JQ_TOKEN,
      useValue:jQuery
    },
    EventListResolverService,
    EventResolverService,
    AuthService,
    {
      provide:"checkDeactivateCreateEvent",
      useValue:CheckDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function CheckDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm("you haven't saved this event, are you really sure you want to cancel?")
  }
  return true
}