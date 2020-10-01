import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  private shoppingCart = [];
  private shoppingCartBak = [];
  private totalSaved: any;
  private priceData = [];
  private cost: number;
  private total: number;
    private segmentChoice: string;

  constructor(private dataService: DataService) {this.shoppingCart = dataService.shoppingCart; this.priceData = dataService.priceData;}

  async ngOnInit() {
      this.segmentChoice = "Kroger";
    this.shoppingCart = await this.initializeItems();
    await this.calculateCartCost();
      await this.calculateSavings("Kroger");
  }

  async pageLoad() {
      this.shoppingCart = await this.initializeItems();
      await this.calculateCartCost();
      await this.calculateSavings(this.segmentChoice);
  }

    async initializeItems(): Promise<any> {
        const shoppingCart = this.dataService.shoppingCart;
        this.shoppingCartBak = shoppingCart;
        return shoppingCart;
  }

  async filterList(evt) {
    this.shoppingCart = await this.initializeItems();
    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      return;
    }

    this.shoppingCart = this.shoppingCart.filter(filteredList => {
      if (filteredList.name && searchTerm) {
        return (filteredList.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || (filteredList.brand.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }

  segmentChanged(ev: any) {
      this.segmentChoice = ev.detail.value;
      this.calculateCartCost();
    this.calculateSavings(ev.detail.value);
  }

  delete(item) {
    this.shoppingCart.splice(item, 1);
      this.calculateCartCost();
      this.calculateSavings(this.segmentChoice);
  }

  async calculateCartCost() {
    this.total = 0;
      this.shoppingCart = this.dataService.shoppingCart;
    this.shoppingCart.forEach((value) => {
      this.total = this.total + value.price;
    });
  }

  async calculateSavings(ev) {
      this.priceData = this.dataService.priceData;
      this.cost = 0;
      this.shoppingCart.forEach((value) => {

          this.priceData = this.dataService.priceData;

          this.priceData = this.priceData.filter(filteredList => {
              if (filteredList.brand && value.brand) {
                  return (filteredList.productName.toLowerCase().indexOf(value.productName.toLowerCase()) > -1) && (filteredList.brand.toLowerCase().indexOf(value.brand.toLowerCase()) > -1 ) && (filteredList.name.toLowerCase().indexOf(ev.toLowerCase()) > -1 );
              }
          });
          this.cost = this.cost + this.priceData[0].price;
      });
      this.totalSaved = this.cost - this.total;
      //this.totalSaved = this.totalSaved.toFixed(2);
  }
}
