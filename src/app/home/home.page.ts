import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  token: string = 'empty';
  phone: string = 'empty';
  counter: number = 0;

  constructor(
      public navCtrl: NavController,
      private iab: InAppBrowser,
      public platform: Platform,
      public router: Router,
      private browserTab: BrowserTab
  ) {
    this.openUrl();
  }

  openUrl() {
    this.platform.ready().then(() => {
      let browser = this.iab.create('https://thepuffnpass.com/', '_self', 'location=no,zoom=no' );
      browser.hide();
      browser.on('loadstop').subscribe(event => {
        browser.show();
      });
      browser.on('exit').subscribe(event => {
        navigator['app'].exitApp();
      });
    });     
  }
}
