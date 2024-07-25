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
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, DisplayImgComponent, CategoriesComponent, CategoryItemComponent, NameTagComponent,
    ImgComponent, ProductTileComponent, ProductsComponent, OfferComponent, ReleatedComponent,RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  constructor(private dataServiceService: DataServiceService) { }
  products: any[] = [];
  public homePageData: any ={
    header: {
      label: "Default",
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
   
  }

  ngOnInit(): void {
    this.dataServiceService.loadData().subscribe((resp) => {
      let header: any= {
        label: "BykeStore"
      };
      let config = {
        indexKey: [{
          key: "name"
        },{
          key: "profile"
        },{
          key: "cart"
        }]
      }
      console.log("jjj",resp.data);
      resp.data.forEach((productItem:any, index: number)=> {
        if (index < config.indexKey.length) {
          header[`${config.indexKey[index].key}`] = { src: productItem.productImage }
        }
      });
      console.log(header);
      this.homePageData.header = header;
    });
  }
}
