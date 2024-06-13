import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameTagComponent } from '../name-tag/name-tag.component';
import { ImgComponent } from '../img/img.component';
import { ProductTileComponent } from '../product-tile/product-tile.component';
import { OfferImgComponent } from '../offer-img/offer-img.component';
import { DisplayImgComponent } from '../display-img/display-img.component';

@Component({
  selector: 'app-releated',
  standalone: true,
  imports: [NameTagComponent,ImgComponent,ProductTileComponent,OfferImgComponent,CommonModule,DisplayImgComponent],
  templateUrl: './releated.component.html',
  styleUrl: './releated.component.css'
})
export class ReleatedComponent {
 @Input() releated:string="Your Releated Items....";
 @Input() viewTo:string="viewAll";
 @Input() products: any = [
  {
    src: "assets/imgs/bird.png",
    alt: "Laptop"
  },
  {
    src: "assets/imgs/sun.svg.png",
    alt: "Laptop"
  },
  {
   
      src: "assets/imgs/alien.png",
      alt: "Laptop"
  
  },
]
};
