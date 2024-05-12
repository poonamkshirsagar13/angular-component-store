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
    src: 'assets/imgs/home.png',
    alt: 'Logo Image'
  };

  @Input() productImgOne: any = {
    src: 'assets/imgs/home.png',
    alt: 'Logo Image'
  };

  @Input() productImgTwo: any = {
    src: 'assets/imgs/home.png',
    alt: 'Logo Image'
  };

  @Input() productImgThr: any = {
    src: 'assets/imgs/home.png',
    alt: 'Logo Image'
  };
  
  @Input() desc_p: string = "Product is new developed";
  @Input() desc_p2:string ="Product Product Product";
  @Input() labelOne:string="300$";
  @Input() labelTwo:string="400$";
}
