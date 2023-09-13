import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftCardComponent } from './gift-card/gift-card.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    GiftCardComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    GiftCardComponent,
    SlickCarouselModule
  ]
})
export class SharedModule { }
