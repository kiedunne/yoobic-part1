import { Component } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { NavController } from "ionic-angular";
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: "page-list",
  templateUrl: "list.html"
})
export class ListPage {
  url: string;
  data: string;
  constructor(public navCtrl: NavController, public http: Http) {}
  ionViewDidLoad() {
    this.loadGhibli();
  }
  loadGhibli() {
    this.http
      .get("https://ghibliapi.herokuapp.com/films")
      .map(response => response.json())
      .subscribe(
        data => {
          console.log(data);
          this.data = data

        },
        err => {
          console.log('error!');
        }
      );
  }
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
