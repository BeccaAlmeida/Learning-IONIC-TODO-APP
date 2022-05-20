import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers:[SplashScreen]
})
export class AppComponent {
  constructor(
    public splachsScreen: SplashScreen

  ) {
    this.splachsScreen.show();
  }
}
