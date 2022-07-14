import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ball',
  // templateUrl: './ball.component.html',
  template: `
    <h2>
      {{ value }}
    </h2>
    <ul>
      <li *ngFor="let ball of balls">
        {{ ball }}
      </li>
    </ul>
  `,
  styleUrls: ['./ball.component.scss'],
})
export class BallComponent implements OnInit {
  value = 'Lol';
  balls = ['green', 'red', 'yellow'];

  constructor() {}

  ngOnInit(): void {}
}
