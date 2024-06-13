import { Component ,Input} from '@angular/core';
import { ImgComponent } from '../img/img.component';
import { NameTagComponent } from '../name-tag/name-tag.component';


@Component({
  selector: 'app-display-img',
  standalone: true,
  imports: [ImgComponent,NameTagComponent],
  templateUrl: './display-img.component.html',
  styleUrl: './display-img.component.css'
})
export class DisplayImgComponent {
  @Input() logo: any = {
    src: 'assets/imgs/bird.png',
    alt: 'Logo Image'
  };
  @Input() label:any="pirot";
  @Input() labelName:any="50%"

}
