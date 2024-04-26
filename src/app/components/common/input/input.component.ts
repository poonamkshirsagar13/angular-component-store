import { Component,Input,Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  /**
   * Image Src and Alt Text
   *
   * @required
   */
  @Input () label: string='ElecoXo';
  @Input () xStyle: string='ElecoXo';
}
