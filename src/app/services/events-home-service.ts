import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEvents } from '../components/models/events.interface';
import { Observable } from 'rxjs';
import { IEventsHome } from '../components/models/events-home-interface';

@Injectable({
  providedIn: 'root'
})
export class EventsServiceHome {
  
  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEventsHome[]> {
    return this.http.get<IEventsHome[]>('assets/data/events-home.json')
   
  }

}