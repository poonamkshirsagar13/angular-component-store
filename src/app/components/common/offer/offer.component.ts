import { Component, Input } from '@angular/core';
import { OfferImgComponent } from '../offer-img/offer-img.component';
import { OfferDisplayComponent } from '../offer-display/offer-display.component';
import { DataServiceService } from '../../../service/data-service.service';


@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [OfferImgComponent, OfferDisplayComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent {
  constructor(private dataServiceService: DataServiceService) { }
  @Input() offer: any = {
    images: [{
      logo: {
        src: 'assets/imgs/bird.png',
        alt: 'Logo Image'
      },
      label: 'offerLabel1',
      labelName: 'offerLabelName1'
    }, {
      logo: {
        src: 'assets/imgs/bird.png',
        alt: 'Logo Image'
      },
      label: 'offerLabel2',
      labelName: 'offerLabelName2'
    }],
    cat: [
      {
      labelName: "OfferSlide",
      highlight: "SlidePrice",
      desc: 'Price Today Slide',
      desc1: 'Discounte Slide',
        icon: {
          src: "assets/imgs/bird.png",
          alt: "Laptop 1"
        }
      },{
      labelName: "2OfferSlide",
      highlight: "2SlidePrice",
      desc: '2Price Today Slide',
      desc1: '2Discounte Slide',
        icon: {
          src: "assets/imgs/sun.svg.png",
          alt: "Laptop 12"
        }
      },{
      labelName: "3OfferSlide",
      highlight: "3SlidePrice",
      desc: '3Price Today Slide',
      desc1: '3Discounte Slide',
        icon: {
          src: "assets/imgs/city-hall.png",
          alt: "Laptop 13"
        },
    }]
  };
  ngOnInit(): void {
    this.dataServiceService.categoriesData().subscribe((resp: any) => {
      const images = resp.data.slice(0, 2).map(
        (offer: any) => {
          return {
            logo: {
              src: offer.productImage,
              alt: offer.brand
            },
            label: offer.brand,
            labelName: offer.id

          }
        }
      );
      this.offer.images = images;
    });

    this.dataServiceService.loadData().subscribe((resp:any) =>{
      const slide = resp.data.slice(0,3).map((prod:any)=>{
        return {
          labelName: prod.productName,
          highlight: prod.product,
          desc: prod.productMaterial,
          desc1: prod.department,
          icon: {
            src: prod.productImage,
            alt: prod.productName
          },
        }
      });
      this.offer.cat = slide;
    })
  }
}
