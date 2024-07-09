import { Component, Input } from '@angular/core';
import { ImgComponent } from '../common/img/img.component';
import { NameTagComponent } from '../common/name-tag/name-tag.component';
import { InputComponent } from '../common/input/input.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ImgComponent,NameTagComponent,InputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() nameLogo: any = {
    src: 'assets/imgs/home.png',
    alt: 'Logo Imagemnmmmmnmn'
  };
  @Input() profileLogo: any = {
    src: 'assets/imgs/profile.png',
    alt: 'profileLogo Image'
  };
  @Input() cartLogo: any = {
    src: 'assets/imgs/cart.svg',
    alt: 'cartLogo Image'
  };
  @Input() label:string = "SUPER"
  
}
