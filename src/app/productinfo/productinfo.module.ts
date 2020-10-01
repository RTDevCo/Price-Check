/**
 * Created by rtbla on 9/30/2020.
 */
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductInfoPage } from './productinfo.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProductInfoPageRoutingModule } from './productinfo-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        ProductInfoPageRoutingModule
    ],
    declarations: [ProductInfoPage]
})
export class ProductInfoPageModule {}
