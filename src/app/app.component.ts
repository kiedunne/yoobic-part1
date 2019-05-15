import { Component, ViewChild } from "@angular/core";

import { Platform, MenuController, Nav } from "ionic-angular";
import { OAuthService } from "angular-oauth2-oidc";
import { HelloIonicPage } from "../pages/hello-ionic/hello-ionic";
import { ListPage } from "../pages/list/list";

import { RegisterPage } from "../pages/register/register";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HelloIonicPage;
  pages: Array<{ title: string; component: any }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    oauthService: OAuthService
  ) {
    
    this.initializeApp();

    this.pages = [
      { title: "Hello Ionic", component: HelloIonicPage },
      { title: "Studio Ghibli Films", component: ListPage },
      { title: "Register", component: RegisterPage }
    ];
  }

initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
