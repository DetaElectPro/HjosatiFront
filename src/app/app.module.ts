// import { SearchMuseumPage } from './../pages/search-museum/search-museum';
// import { MuseumDetailPage } from './../pages/museum-detail/museum-detail';
// import { AllMuseumPage } from './../pages/all-museum/all-museum';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CatRoomPage } from '../pages/cat-room/cat-room';
import { RoominfoPage } from '../pages/roominfo/roominfo';
import { LoginPage } from '../pages/login/login';
import { BookinfoPage } from '../pages/bookinfo/bookinfo';
import { RegisterPage } from '../pages/register/register';
import { MyreservePage } from '../pages/myreserve/myreserve';
import { BillPage } from '../pages/bill/bill';
import { SettingsPage } from '../pages/settings/settings';
import { PaymentPage } from '../pages/payment/payment';

import { HotelProvider } from '../providers/hotel/hotel';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
     CatRoomPage,
     RoominfoPage,
     LoginPage,
     BookinfoPage,
     RegisterPage,
     MyreservePage,
     BillPage,
     SettingsPage,
     PaymentPage,
     // SearchMuseumPage,
     // MuseumDetailPage,
     // AllMuseumPage
     //

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CatRoomPage,
    RoominfoPage,
    LoginPage,
    BookinfoPage,
    RegisterPage,
    MyreservePage,
    BillPage,
    SettingsPage,
    PaymentPage,
    // SearchMuseumPage,
    // MuseumDetailPage,
    // AllMuseumPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HotelProvider,
    Camera,
    Geolocation

  ]
})
export class AppModule {}
