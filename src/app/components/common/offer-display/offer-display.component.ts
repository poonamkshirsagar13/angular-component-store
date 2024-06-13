import { Component,Input } from '@angular/core';
import { NameTagComponent } from '../name-tag/name-tag.component';
import { DiscriptionComponent } from '../discription/discription.component';
import { ImgComponent } from '../img/img.component';


@Component({
  selector: 'app-offer-display',
  standalone: true,
  imports: [NameTagComponent,DiscriptionComponent,ImgComponent],
  templateUrl: './offer-display.component.html',
  styleUrl: './offer-display.component.css'
})
export class OfferDisplayComponent {
  /**
   * Image Src and Alt Text
   *
   * @required
   */
  // @Input() labelName:string="fun";
  // @Input() highlight:string="FunPrice";
  // @Input () desc1: string='Price Today';
  // @Input () desc2: string='Discounte start';
  @Input() cat: any = {
    labelName1:"fun",
    highlight1:"FunPrice",
    desc1: 'Price Today',
    desc2: 'Discounte start',
    icon1: {
      src: "assets/imgs/profile.png",
      alt: "Laptop 1"
    },
    labelName2:"Alien",
    highlight2:"Alien Price",
    desc3: 'Another planet ',
    desc4: 'Alience ',
    icon2: {
      src: "assets/imgs/alien.png",
      alt: "Laptop 2"
    },
    labelName3:"HeadPhone",
    highlight3:"With noise canesel  ",
    desc5: 'with same price  ',
    desc6: 'earphone ',
    icon3: {
      src: "assets/imgs/bird.png",
      alt: "Laptop 3"
    }
  };

  changeImage = (count: number)=> {

  }
}
