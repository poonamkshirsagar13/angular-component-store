import { Component,Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DisplayImgComponent } from '../common/display-img/display-img.component';
import { CategoriesComponent } from '../common/categories/categories.component';
import { CategoryItemComponent } from '../common/category-item/category-item.component';
import { NameTagComponent } from '../common/name-tag/name-tag.component';
import { ImgComponent } from '../common/img/img.component';
import { ProductTileComponent } from '../common/product-tile/product-tile.component';
import { ProductsComponent } from '../common/products/products.component';
import { OfferComponent } from '../common/offer/offer.component';
import { ReleatedComponent } from '../common/releated/releated.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,DisplayImgComponent,CategoriesComponent,
    CategoryItemComponent,NameTagComponent,ImgComponent,ProductTileComponent,ProductsComponent,
    OfferComponent,ReleatedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public homePageData: any = {
    header: {
      label: "Poonam",
      name: {
        src: "assets/imgs/home.png",
        alt: "Logo Image"
      },
      profile: {
        src: "assets/imgs/profile.png",
        alt: "Profile Image"
      },
      cart: {
        src: "assets/imgs/cart.svg",
        alt: "Cart Image"
      }
    },
    catagories: [{
        label: "Laptop",
        icon: {
          src: "assets/imgs/bird.png",
          alt: "Laptop"
        }
      },
      {
        label: "Tabs",
        icon: {
          src: "assets/imgs/bird.png",
          alt: "Laptop"
        }
      },
      {
        label: "Phones",
        icon: {
          src: "assets/imgs/bird.png",
          alt: "Laptop"
        }
    }],
    products: [{
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
    }],
  }
}
