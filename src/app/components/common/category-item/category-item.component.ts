import { Component, Input } from '@angular/core';
import { ImgComponent } from '../img/img.component';
import { NameTagComponent } from '../name-tag/name-tag.component';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [ImgComponent,NameTagComponent],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css'
})
export class CategoryItemComponent {
    @Input() cat: any = {
      label: "HeadPhones",
      icon: {
        src: "assets/imgs/bird.png",
        alt: "Laptop"
      }
    };

}
