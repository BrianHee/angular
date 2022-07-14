import { BallService } from './ball/ball.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BallComponent } from './ball/ball.component';

@NgModule({
  declarations: [AppComponent, BallComponent],
  imports: [BrowserModule],
  providers: [BallService],
  bootstrap: [AppComponent],
})
export class AppModule {}
