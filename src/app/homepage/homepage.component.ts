import { Component } from '@angular/core';
import { InvestmentCardModel } from '../shared/investment-card/investment-card.model';
import { GiftCardModel } from '../shared/gift-card/gift-card.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true};

  gifts: GiftCardModel[] = [
    {
      title: 'Gift Card 1',
      description: 'Find the right card for you!',
      anotherLine: 'Start with a credit limit of at least £200'
    },
    {
      title: 'Gift Card 2',
      description: 'Find the right card for you!',
      anotherLine: 'Start with a credit limit of at least £200'
    },
    {
      title: 'Gift Card 3',
      description: 'Find the right card for you!',
      anotherLine: 'Start with a credit limit of at least £200'
    },
    {
      title: 'Gift Card 4',
      description: 'Find the right card for you!',
      anotherLine: 'Start with a credit limit of at least £200'
    }
  ]

  investments: InvestmentCardModel[] = [
    {
      icon: 'mutual-funds',
      title: 'Mutual Funds',
      investment: 3000.00,
      currentValue: 3250.00,
    },
    {
      icon: 'commodities',
      title: 'Commodities',
      investment: 12000.00,
      currentValue: 13250.00,
    },
    {
      icon: 'crypto',
      title: 'Crypto',
      investment: 10000.00,
      currentValue: 11580.00,
    },
    {
      icon: 'gold',
      title: 'Gold',
      investment: 3000.00,
      currentValue: 2250.00,
    }
  ]

  slickInit(e: any) {
    console.log('slick initialized');
  }

}
