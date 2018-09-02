import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NextToHomePage } from '../pages/NextToHome/NextToHome';
import { ContentProvider } from '../providers/content/content';

import { ComponentsModule } from '../components/components.module';
import { BubbleComponent } from '../components/bubble/bubble';
import { BubbleContainerComponent } from '../components/bubble-container/bubble-container';

@NgModule({
  declarations: [
    MyApp,
      HomePage,
      NextToHomePage
  ],
  imports: [
      BrowserModule,
      ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      HomePage,
      NextToHomePage,
      BubbleComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContentProvider
  ]
})
export class AppModule {}
