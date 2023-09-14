import { Component, Input } from '@angular/core';
import { InvestmentCardModel } from './investment-card.model';

@Component({
  selector: 'app-investment-card',
  templateUrl: './investment-card.component.html',
  styleUrls: ['./investment-card.component.scss']
})
export class InvestmentCardComponent {

  @Input('data') data: InvestmentCardModel = {};

}
