import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.showSplash();
  }

  async showSplash() {
    await this.platform.ready();
    const lottie = (window as any).lottie;

    lottie.splashscreen.on('lottieAnimationEnd', (ev: Event) => {
      console.log('Animation ended');
    });

    lottie.splashscreen.on('lottieAnimationStart', (ev: Event) => {
      console.log('Animation started');
    });

    await lottie.splashscreen.show('www/assets/demo-lottie.json', false);
    //    await lottie.splashscreen.show('https://assets.lottiefiles.com/datafiles/99nA1a7mkSF3Oz8/data.json', true, 1024, 768);

  }
}


