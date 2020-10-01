import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
   private shoppingCart = [];

  constructor( private dataService: DataService) {
      this.shoppingCart = dataService.shoppingCart;
  }

}
