import { Component } from '@angular/core';
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

}
