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
  receivedServerDateTime: String;
  toTz: String = 'Asia/Manila';
  mnlDate: Date;
  iso8601: String;
  serverTz: String;

  constructor() {
    // this.date = new Date();
  }

  async fetchServerTime() {
    console.log('Fetching server time');
    let d = await axios.get(`${environment.avaloqService}/time`);
    let serverDate = new Date(d.data['iso8601']);
    this.date = serverDate;
    let fromTz = d.data['timezone'];
    this.receivedServerDateTime = d.data['iso8601'];
    this.iso8601 = d.data['iso8601'];
    this.serverTz = d.data['timezone'];
    let t = await axios.get(`${environment.timezonedbService}/v2.1/convert-time-zone?key=${environment.timezonedbApiKey}&time=${serverDate.valueOf()}&format=json&from=${fromTz}&to=${this.toTz}`);

    let toTz = new Date(t.data['toTimestamp']);
    this.mnlDate = toTz;
  }
}
