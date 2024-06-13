import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {
    /**
   * Image Src and Alt Text
   *
   * @required
   */
  @Input() priceDiscounted:string='$555';
  @Input() priceOriginal:string='$676';

}
