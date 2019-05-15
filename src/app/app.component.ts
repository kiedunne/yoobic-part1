import { Component, ViewChild } from "@angular/core";
import { Platform, MenuController, Nav } from "ionic-angular";

import { HelloIonicPage } from "../pages/hello-ionic/hello-ionic";
import { ListPage } from "../pages/list/list";
import { AuthService } from '../services/auth.service';
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
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
    private auth: AuthService 
  ) {
    
    this.initializeApp();

    this.pages = [
      { title: "Hello Ionic", component: HelloIonicPage },
      { title: "Studio Ghibli Films", component: ListPage },
      { title: "Login", component: LoginPage }
    ];
  }

initializeApp() {
  this.rootPage = SignupPage
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
