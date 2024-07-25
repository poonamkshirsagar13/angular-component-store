import { Component, Input,Output,EventEmitter } from '@angular/core';
import { ImgComponent } from '../common/img/img.component';
import { NameTagComponent } from '../common/name-tag/name-tag.component';
import { InputComponent } from '../common/input/input.component';
import { zip } from 'rxjs';
import { url } from 'inspector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ImgComponent,NameTagComponent,InputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router:Router) { }
  @Output() buttonclick = new EventEmitter();
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

  handleClick(){
    console.log("cart");
    this.router.navigate([('/cart')]);
  }
  
}
