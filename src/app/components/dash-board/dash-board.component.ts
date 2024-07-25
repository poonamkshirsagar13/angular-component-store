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
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [
    HeaderComponent, DisplayImgComponent, CategoriesComponent, CategoryItemComponent, NameTagComponent,
    ImgComponent, ProductTileComponent, ProductsComponent, OfferComponent, ReleatedComponent,
    RouterOutlet
  ],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {
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
    offer: {
      images: [{
        logo: {
          src: 'assets/imgs/alien.png',
          alt: 'Logo Image'
        },
        label:'Alien',
        labelName:'50%'
      }, {
        logo: {
          src: 'assets/imgs/bird.png',
          alt: 'Logo Image'
        },
        label:'Bird',
        labelName:'30%'
      }],

      slide:[
       {
        labelName: "fun3",
        highlight: "FunPrice",
        desc: 'Price Today',
        desc1: 'Discounte start',
        icon: {
          src: "assets/imgs/profile.png",
          alt: "Laptop 1"
        }
      },{
        labelName: "Alien2",
        highlight: "Alien Price",
        desc: 'Another planet ',
        desc1: 'Alience ',
        icon: {
          src: "assets/imgs/alien.png",
          alt: "Laptop 2"
        },
      },{
        labelName: "HeadPhone1",
        highlight: "With noise canesel  ",
        desc: 'with same price  ',
        desc1: 'earphone ',
        icon: {
          src: "assets/imgs/bird.png",
          alt: "Laptop 3"
        }

       }
      ]  
    },
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
    this.dataServiceService.loadData().subscribe((resp) => {
      this.homePageData.products = [];
      console.log(resp.data);
      const productsFormatted = resp.data.slice(0, 2).map((productItem: any) => {
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
          priceDiscounted: productItem.price * 0.9,
          priceOriginal: productItem.price,
          label: productItem.productName
        };
      });
      this.homePageData.products = productsFormatted;
    });

    this.dataServiceService.categoriesData().subscribe((resp) => {
      this.homePageData.categories = [];
      console.log(resp.data);
      const categoriesFormat = resp.data.slice(0, 3).map((categori: any) => {
        return {
          label: categori.brand,
          icon: {
            src: categori.productImage,
            alt: categori.brand
          }
        };
      });
      console.log("label", categoriesFormat)
      this.homePageData.catagories = categoriesFormat;
    });
  }

}
