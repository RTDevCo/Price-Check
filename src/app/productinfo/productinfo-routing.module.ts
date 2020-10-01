/**
 * Created by rtbla on 9/30/2020.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoPage } from './productinfo.page';

const routes: Routes = [
    {
        path: '',
        component: ProductInfoPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductInfoPageRoutingModule {}
