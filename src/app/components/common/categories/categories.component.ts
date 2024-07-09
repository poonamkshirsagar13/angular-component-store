import { Component, Input } from '@angular/core';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryItemComponent, CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  // @Input() label:string="Laptop";
  // @Input() logo: any = {
  //   src: 'assets/imgs/bird.png',
  //   alt: 'Logo Image'
  // };

  @Input() cats: any = [{
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
  
  ]

}
