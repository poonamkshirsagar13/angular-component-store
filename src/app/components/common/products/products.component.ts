import { Component, Input } from '@angular/core';
import { ProductTileComponent } from '../product-tile/product-tile.component';
import { CommonModule } from '@angular/common';
import { NameTagComponent } from '../name-tag/name-tag.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductTileComponent,CommonModule,NameTagComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input() Today:string="Today's Deals";
  @Input() viewTo:string="View All"
  @Input() products: any = [{
    mainIcon: {
      src: "assets/imgs/bird.png",
      alt: "Laptop"
    },
    label: "Laptop",
    desc_p: "Product is new developed",
    desc_p2: "Product Product Product",
    priceDiscounted: "$300",
    priceOriginal: "$400",

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
    }
  },
  {
    mainIcon: {
      src: "assets/imgs/bird.png",
      alt: "Laptop"
    },
    label: "Laptop",
    desc_p: "Product is new developed",
    desc_p2: "Product Product Product",
    priceDiscounted: "$300",
    priceOriginal: "$400",
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
    }
  }
]
}
