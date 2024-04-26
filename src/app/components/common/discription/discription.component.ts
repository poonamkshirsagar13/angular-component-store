import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-discription',
  standalone: true,
  imports: [],
  templateUrl: './discription.component.html',
  styleUrl: './discription.component.css'
})
export class DiscriptionComponent {
   /**
   * Image Src and Alt Text
   *
   * @required
   */
  @Input () disStyle: string='';

}
