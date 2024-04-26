import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-img',
  standalone: true,
  imports: [],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css',
  
})
export class ImgComponent {
  /**
   * Image Src and Alt Text
   *
   * @required
   */
  @Input() img: any = {
    src: '',
    alt: ''
  };
  /**
   * Label for the Image
   *
   * @required
   */
  @Input() label: string = '';
  @Input() enableBackground: Boolean = false;
  @Input() imgSize:'small'|'medium'|'large'= 'medium';
  @Input() imgCXStyle: string= '';

  public get imgClasses(): string[] {
    return [`img-${this.imgSize}`, 'img'];
  }
}

