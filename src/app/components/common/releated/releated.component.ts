import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameTagComponent } from '../name-tag/name-tag.component';
import { ImgComponent } from '../img/img.component';
import { ProductTileComponent } from '../product-tile/product-tile.component';
import { OfferImgComponent } from '../offer-img/offer-img.component';
import { DisplayImgComponent } from '../display-img/display-img.component';
import { DataServiceService } from '../../../service/data-service.service';
import { bindCallback } from 'rxjs';
import { style } from '@angular/animations';


@Component({
  selector: 'app-releated',
  standalone: true,
  imports: [NameTagComponent, ImgComponent, ProductTileComponent, OfferImgComponent, CommonModule, DisplayImgComponent],
  templateUrl: './releated.component.html',
  styleUrl: './releated.component.css'
})
export class ReleatedComponent {
  constructor(private dataServiceService: DataServiceService) { }
  
  @Output() buttonclick = new EventEmitter();
  @Input() releated: string = "Your Releated Items....";
  @Input() viewTo: string = "viewAll";
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
  @Input() relImages = {
    logo: {
      src: 'assets/imgs/alien.png',
      alt: 'Logo Image'
    },
    label: 'rel',
    labelName: 'rel name'
  }

  ngOnInit(): void {
    this.dataServiceService.categoriesData().subscribe((resp) => {
      console.log("sm", resp.data)
      const productData = resp.data.slice(0, 4).map((prod: any) => {
        return {
          src: prod.productImage,
          alt: prod.brand,
          id: prod.id
        }
      })
      const relImageData = resp.data.slice(0, 1).map((rel: any) => {
        console.log('getting data from service');
        return {
          logo: {
            src: rel.productImage,
            alt: rel.brand
          },
          label: rel.brand,
          labelName: rel.id
        }
      });
      this.products = productData;
      console.log('updating data on viewer', relImageData)
      this.relImages = relImageData[0];
    })
  }

  handleClick() {
    this.buttonclick.emit();
    console.log('clicked');
  }

  divOverId: string = '';
  mouseOver(prodId: string, isOver: boolean) {
    if(this.divOverId != prodId && isOver){
      this.divOverId = prodId;
    } else {
      this.divOverId = '';
    }
  }

};
