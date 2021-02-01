import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server-time-viewer';
  date: Date;
  toTz: String = 'Asia/Manila';
  fromTz: String = 'UTC +02:00';
  mnlDate: Date;

  constructor() {
    // this.date = new Date();
  }

  async fetchServerTime() {
    console.log('Fetching server time');
    let d = await axios.get(`${environment.avaloqService}/time`);
    console.log(d);
    let serverDate = new Date(d.data['iso8601']);
    this.date = serverDate;
    console.log(serverDate);
    let t = await axios.get(`${environment.timezonedbService}/v2.1/convert-time-zone?key=${environment.timezonedbApiKey}&time=${serverDate.valueOf()}&format=json&from=${this.fromTz}&to=${this.toTz}`);
    console.log(t);

    let toTz = new Date(t.data['toTimestamp']);
    console.log(toTz);
    this.mnlDate = toTz;
    console.log('server iso ', d.data['iso8601'])
    console.log('server ', serverDate.valueOf());
    console.log('mnl ', toTz.valueOf());
    console.log(toTz.valueOf() - serverDate.valueOf());
    console.log(serverDate);
    console.log(toTz);
  }
}
