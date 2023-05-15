import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEvents } from '../components/models/events.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvents[]> {
    return this.http.get<IEvents[]>('assets/data/events.json')
   
  }
  getPreviousEvents(): Observable<IEvents[]> {
    return this.http.get<IEvents[]>('assets/data/previous-events.json')
   
  }
}
 