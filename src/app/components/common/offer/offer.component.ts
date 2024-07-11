import { Component, Input } from '@angular/core';
import { OfferImgComponent } from '../offer-img/offer-img.component';
import { OfferDisplayComponent } from '../offer-display/offer-display.component';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [OfferImgComponent,OfferDisplayComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent {
  @Input() offer: any = {
    images: [{
      logo: {
        src: 'assets/imgs/bird.png',
        alt: 'Logo Image'
      },
      label:'offerLabel1',
      labelName:'offerLabelName1'
     },{
      logo: {
        src: 'assets/imgs/bird.png',
        alt: 'Logo Image'
      },
      label:'offerLabel2',
      labelName:'offerLabelName2'
     }],
    slide:{
      labelName1: "OfferSlide",
      highlight1: "SlidePrice",
      desc1: 'Price Today Slide',
      desc2: 'Discounte Slide',
      icon1: {
       src: "assets/imgs/bird.png",
       alt: "Laptop 1"
      },
      labelName2: "2OfferSlide",
      highlight2: "2SlidePrice",
      desc3: '2Price Today Slide',
      desc4: '2Discounte Slide',
      icon2: {
       src: "assets/imgs/sun.svg.png",
       alt: "Laptop 12"
      },
      labelName3: "3OfferSlide",
      highlight3: "3SlidePrice",
      desc5: '3Price Today Slide',
      desc6: '3Discounte Slide',
      icon3: {
       src: "assets/imgs/city-hall.png",
       alt: "Laptop 13"
      },
    }
  };
}
