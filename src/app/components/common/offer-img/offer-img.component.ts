import { Component, Input } from '@angular/core';
import { DisplayImgComponent } from '../display-img/display-img.component';

@Component({
  selector: 'app-offer-img',
  standalone: true,
  imports: [DisplayImgComponent],
  templateUrl: './offer-img.component.html',
  styleUrl: './offer-img.component.css'
})
export class OfferImgComponent {
 @Input() offerImages = [{
  logo: {
    src: 'assets/imgs/bird.png',
    alt: 'Logo Image'
  },
  label: 'SDSDSDSD',
  labelName: 'JJJJJJJJJ'
 },{
  logo: {
    src: 'assets/imgs/bird.png',
    alt: 'Logo Image'
  },
  label: 'XZXZXZXZX',
  labelName: 'WWWWWWJJ'
}];
}
