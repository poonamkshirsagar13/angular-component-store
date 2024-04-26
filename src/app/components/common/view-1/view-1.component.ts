import { Component } from '@angular/core';
import { ImgComponent } from '../img/img.component';
import { DiscriptionComponent } from '../discription/discription.component';
import { NameTagComponent } from '../name-tag/name-tag.component';

@Component({
  selector: 'app-view-1',
  standalone: true,
  imports: [ImgComponent,DiscriptionComponent,NameTagComponent],
  templateUrl: './view-1.component.html',
  styleUrl: './view-1.component.css'
})
export class View1Component {

}
