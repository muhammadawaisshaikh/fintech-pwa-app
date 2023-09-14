import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftCardComponent } from './gift-card/gift-card.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InvestmentCardComponent } from './investment-card/investment-card.component';

@NgModule({
  declarations: [
    GiftCardComponent,
    InvestmentCardComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    GiftCardComponent,
    InvestmentCardComponent,
    SlickCarouselModule
  ]
})
export class SharedModule { }
