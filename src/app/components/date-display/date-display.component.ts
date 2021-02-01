import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'date-display',
  templateUrl: './date-display.component.html',
  styleUrls: ['./date-display.component.css']
})
export class DateDisplayComponent implements OnInit {
  @Input() date: Date;

  dayOfWeek: String;
  month: String;
  day: number;

  monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  dayNames = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
