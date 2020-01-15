import {Routes} from '@angular/router';
import{
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolverService
  } from "./events/index";
import { Error404Component } from './errors/error404/error404.component';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { EventResolverService } from './events/event-details/event-resolver.service';
export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate:['checkDeactivateCreateEvent']},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: 'events', component: EventListComponent, resolve:{events:EventListResolverService}},
    {path: '404', component: Error404Component},
    {path: 'events/:id', component: EventDetailsComponent, resolve:{event:EventResolverService}},
    {path: '', redirectTo:"/events", pathMatch:'full'},
    {path:"user", loadChildren:'./user/user.module#UserModule'}
    
] 