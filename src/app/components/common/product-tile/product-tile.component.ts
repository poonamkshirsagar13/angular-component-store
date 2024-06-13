import { Component,Input } from '@angular/core';
import { ImgComponent } from '../img/img.component';
import { DiscriptionComponent } from '../discription/discription.component';
import { NameTagComponent } from '../name-tag/name-tag.component';
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [ImgComponent,DiscriptionComponent,NameTagComponent,PriceComponent],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.css'
})
export class ProductTileComponent {
  @Input() product: any = {
    mainIcon: {
      src: 'assets/imgs/home.png',
      alt: 'Logo Image'
    },
    productImgOne: {
      src: 'assets/imgs/home.png',
      alt: 'Logo Image'
    },
    productImgTwo: {
      src: 'assets/imgs/home.png',
      alt: 'Logo Image'
    },
    productImgThr: {
      src: 'assets/imgs/home.png',
      alt: 'Logo Image'
    },
    desc_p: "Product is new developed",
    desc_p2: "Product Product Product",
    priceDiscounted: "$300",
    priceOriginal: "$400"
  }
}
