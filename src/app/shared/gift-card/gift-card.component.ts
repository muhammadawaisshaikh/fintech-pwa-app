import { Component, Input } from '@angular/core';
import { GiftCardModel } from './gift-card.model';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.scss']
})
export class GiftCardComponent {

  @Input('data') data: GiftCardModel = {};

}
