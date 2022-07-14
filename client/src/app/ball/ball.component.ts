import { EmailService } from './../email.service';
import { Component, OnInit } from '@angular/core';
import { BallService } from './ball.service';

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
    <h1>my email is: {{ email }}</h1>
  `,
  styleUrls: ['./ball.component.scss'],
})
export class BallComponent implements OnInit {
  value = 'Lol';
  balls: any;
  email: string;

  constructor(service: BallService, email: EmailService) {
    this.balls = service.getBalls();
    this.email = email.getEmail();
  }

  ngOnInit(): void {}
}
