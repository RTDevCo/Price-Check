import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-productinfo',
    templateUrl: 'productinfo.page.html',
    styleUrls: ['productinfo.page.scss']
})
export class ProductInfoPage implements OnInit {
    public testData: any[];
    private productInfo: any[];
    private priceInfo: any[];
    private pushPrice = [];
    public id: number;
    public shoppingCart = [];

    constructor(private dataService: DataService, private route: ActivatedRoute) {
        this.shoppingCart = dataService.shoppingCart;
    }

    async ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
        });
        await this.initializeItem();

        this.priceInfo = this.priceInfo.filter(filteredList => {
            if (filteredList.brand && this.productInfo["brand"]) {
                return (filteredList.productName.toLowerCase().indexOf(this.productInfo["name"].toLowerCase()) > -1) && (filteredList.brand.toLowerCase().indexOf(this.productInfo["brand"].toLowerCase()) > -1);
            }
        });
        this.priceInfo = this.priceInfo.sort((a, b) => a.price > b.price ? 1 : a.price === b.price ? 0 : -1);
    }

    async initializeItem(): Promise<any> {
        this.testData = this.dataService.CatalogData();
        this.productInfo = this.testData[this.id -1];
        this.priceInfo = this.dataService.PriceData();
    }

    async AddToCart(price) {

        this.pushPrice = this.priceInfo.filter(filteredList => {
         if (price.id) {
              return (filteredList.id == price.id);
           }
        });

        this.shoppingCart.push(this.pushPrice[0]);
    }
}
