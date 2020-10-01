/**
 * Created by rtbla on 9/30/2020.
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1Page } from './tab1.page';

describe('ProductInfoPage', () => {
    let component: ProductInfoPage;
    let fixture: ComponentFixture<ProductInfoPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Tab1Page],
            imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
        }).compileComponents();

        fixture = TestBed.createComponent(Tab1Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
