import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { OAuthModule } from "angular-oauth2-oidc";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { HelloIonicPage } from "../pages/hello-ionic/hello-ionic";
import { ItemDetailsPage } from "../pages/item-details/item-details";
import { ListPage } from "../pages/list/list";
import { LoginPage } from "../pages/login/login";
import { LoginPageModule } from "../pages/login/login.module";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [MyApp, HelloIonicPage, ItemDetailsPage, ListPage],
  imports: [
    BrowserModule,
    HttpModule,
    LoginPageModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    AngularFireAuth
  ]
})
export class AppModule {}
