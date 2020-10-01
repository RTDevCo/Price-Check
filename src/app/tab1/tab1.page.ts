import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public testData: any[];
  public testDataBak: any[];

  constructor(private dataService: DataService, private router: Router) {}

  async ngOnInit() {
    this.testData = await this.initializeItems();
  }

  async initializeItems(): Promise<any> {
    const testData = this.dataService.CatalogData();
    this.testDataBak = testData;
    return testData;
  }

  async filterList(evt) {
    this.testData = await this.initializeItems();
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.testData = this.testData.filter(filteredList => {
      if (filteredList.name && searchTerm) {
        return (filteredList.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) || (filteredList.brand.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
    public onOpenItem(item: any) {
        this.router.navigate([`tabs/ProductInfo/${item.id}`]);
    }
}
