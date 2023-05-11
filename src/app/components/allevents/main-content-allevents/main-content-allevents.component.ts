import { Component, Input, OnInit } from '@angular/core';
import { IEvents } from '../../models/events.interface';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-main-content-allevents',
  templateUrl: './main-content-allevents.component.html',
  styleUrls: ['./main-content-allevents.component.scss']
})
export class MainContentAlleventsComponent implements OnInit{
  // events: IEvents = {
  //   image:'bend_audience.jpg',
  //   title: 'Events',
  //   description: 'Lista dogadjaja u Pivnici',
  //   time: 30840
  // };

  events: IEvents[] = [];
  constructor(private _eventService: EventsService) {}

  ngOnInit():void {
    this._eventService.getEvents().subscribe((data) => {
      this.events = data;
      console.log(this.events)
    });
  }
 
};
 