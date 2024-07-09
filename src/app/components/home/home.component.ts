import { Component, Input } from '@angular/core';
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
import { DataServiceService } from '../../service/data-service.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, DisplayImgComponent, CategoriesComponent, CategoryItemComponent, NameTagComponent,
    ImgComponent, ProductTileComponent, ProductsComponent, OfferComponent, ReleatedComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  constructor(private dataServiceService: DataServiceService) { }
  products: any[] = [];
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
        src: "assets/imgs/sun.svg.png",
        alt: "Laptop"
      }
    },
    {
      label: "Phones",
      icon: {
        src: "assets/imgs/alien.png",
        alt: "Laptop"
      }
    }],
    products: [
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
      },
    ],
  }

  ngOnInit(): void {
    console.log("kdfjdjdkjdkfjdkjfkdjfkdj");
    this.dataServiceService.loadData().subscribe((resp) => {
      this.homePageData.products = [];
      console.log(resp.data);
      const productsFormatted = resp.data.map((productItem: any ) => {
        return {
          mainIcon: {
            src: productItem.productImage,
            alt: productItem.productName
          },
          productImgOne: {
            src: productItem.productImage,
            alt: productItem.productName
          },
          productImgTwo: {
            src: productItem.productImage,
            alt: productItem.productName
          },
          productImgThr: {
            src: productItem.productImage,
            alt: productItem.productName
          },
          desc_p: productItem.description,
          desc_p2: productItem,
          priceDiscounted: productItem.price*0.9,
          priceOriginal: productItem.price,
          label: productItem.productName
        };
      });
      this.homePageData.products = productsFormatted;
    });

    this.dataServiceService.categoriesData().subscribe((resp) => {
      this.homePageData.categories = [];
      console.log(resp.data);
      const categoriesFormat=resp.data.map((categori:any)=>{
        return{
          label: categori.brand,
          icon: {
           src: categori.productImage,
           alt: categori.brand
          }
        };
      }); 
      console.log("label",categoriesFormat)
      this.homePageData.catagories = categoriesFormat;
    }); 
  }
}

