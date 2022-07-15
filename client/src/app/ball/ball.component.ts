import { EmailService } from './../email.service';
import { Component, OnInit } from '@angular/core';
import { BallService } from './ball.service';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
})
export class BallComponent implements OnInit {
  value = 'Lol';
  balls: any;
  email: string;
  isActive = false;

  constructor(service: BallService, email: EmailService) {
    this.balls = service.getBalls();
    this.email = email.getEmail();
  }

  ngOnInit(): void {}
}
