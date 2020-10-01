/**
 * Created by rtbla on 9/30/2020.
 */
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    public testData: any[];
    public priceData: any[];
    public shoppingCart = [];

    constructor(private http: HttpClient) {}


    CatalogData() {
        this.testData = [{
            "id": 1,
            "name": "Peanut Butter",
            "brand": "Jif",
            "image": "https://images-na.ssl-images-amazon.com/images/I/71cLJDlJjKL._SL1500_.jpg"
        }, {
            "id": 2,
            "name": "Peanut Butter",
            "brand": "Peter Pan",
            "image": "https://www.meijer.com/content/dam/meijer/product/0004/53/0000/06/0004530000060_1_A1C1_1200.png"
        }, {
            "id": 3,
            "name": "Peanut Butter",
            "brand": "Skippy",
            "image": "https://images-na.ssl-images-amazon.com/images/I/510xsxHxO1L.jpg"
        }, {
            "id": 4,
            "name": "Toilet Paper",
            "brand": "Quilted Northern",
            "image": "https://images-na.ssl-images-amazon.com/images/I/81xzd60IsUL._AC_SL1500_.jpg"
        }];

        return this.testData;
    }

    PriceData() {
        this.priceData = [{
            id: 1,
            brand: "Jif",
            productName: "Peanut Butter",
            name: "Walmart",
            price: 4.99
        }, {
            id: 2,
            brand: "Jif",
            productName: "Peanut Butter",
            name: "Amazon",
            price: 3.99
        }, {
            id: 3,
            brand: "Jif",
            productName: "Peanut Butter",
            name: "Kroger",
            price: 2.99
        },{
            id: 4,
            brand: "Peter Pan",
            productName: "Peanut Butter",
            name: "Walmart",
            price: 3.99
        }, {
            id: 5,
            brand: "Peter Pan",
            productName: "Peanut Butter",
            name: "Amazon",
            price: 2.99
        }, {
            id: 5,
            brand: "Peter Pan",
            productName: "Peanut Butter",
            name: "Kroger",
            price: 4.99
        },{
            id: 6,
            brand: "Skippy",
            productName: "Peanut Butter",
            name: "Walmart",
            price: 7.99
        }, {
            id: 7,
            brand: "Skippy",
            productName: "Peanut Butter",
            name: "Amazon",
            price: 5.99
        }, {
            id: 8,
            brand: "Skippy",
            productName: "Peanut Butter",
            name: "Kroger",
            price: 3.99
        },{
            id: 9,
            brand: "Quilted Northern",
            productName: "Toilet Paper",
            name: "Walmart",
            price: 15.99
        }, {
            id: 10,
            brand: "Quilted Northern",
            productName: "Toilet Paper",
            name: "Amazon",
            price: 12.99
        }, {
            id: 11,
            brand: "Quilted Northern",
            productName: "Toilet Paper",
            name: "Kroger",
            price: 10.99
        }];

        return this.priceData;
    }
}