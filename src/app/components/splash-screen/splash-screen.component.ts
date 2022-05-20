/* eslint-disable eol-last */
import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  providers: [SplashScreen]
})
export class SplashScreenComponent implements OnInit {

  constructor(
    private splashScreen: SplashScreen
  ) { }

  ngOnInit() {
    setTimeout(this.splashScreen.hide, 5000);
  }
}
