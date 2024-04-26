import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { fn } from '@storybook/test';

@Component({
  selector: 'app-name-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './name-tag.component.html',
  styleUrl: './name-tag.component.css'
})
export class NameTagComponent {
  /**
   * Image Src and Alt Text
   *
   * @required
   */
  @Input() label:string='';
  @Input() size:'small'|'medium'|'large'|'parent'= 'parent';
  @Input() nameStyle: string= '';

  @Output()
  onClick = new EventEmitter<Event>();

  public get Classes(): string[] {
    return [`name-${this.size}`];
  }
}
