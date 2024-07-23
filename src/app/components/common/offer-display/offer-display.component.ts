import { Component, Input } from '@angular/core';
import { NameTagComponent } from '../name-tag/name-tag.component';
import { DiscriptionComponent } from '../discription/discription.component';
import { ImgComponent } from '../img/img.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-offer-display',
  standalone: true,
  imports: [NameTagComponent, DiscriptionComponent, ImgComponent, CommonModule],
  templateUrl: './offer-display.component.html',
  styleUrl: './offer-display.component.css'
})
export class OfferDisplayComponent {
  /**
   * Image Src and Alt Text
   *
   * @required
   */
  @Input() cat: any = [
    {
      labelName: "fun",
      highlight: "FunPrice",
      desc: 'Price Today',
      desc1: 'Discounte start',
      icon: {
        src: "assets/imgs/profile.png",
        alt: "Laptop 1"
      }
    },{
      labelName: "Alien",
      highlight: "Alien Price",
      desc: 'Another planet ',
      desc1: 'Alience ',
      icon: {
        src: "assets/imgs/alien.png",
        alt: "Laptop 2"
      },
    },{
      labelName: "HeadPhone",
      highlight: "With noise canesel  ",
      desc: 'with same price  ',
      desc1: 'earphone ',
      icon: {
        src: "assets/imgs/bird.png",
        alt: "Laptop 3"
      }
    }
  ];

  changeImage = (count: number) => {

  }
  ngOnInit(): void {

  }
}
