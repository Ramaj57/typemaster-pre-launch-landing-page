import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-preorder-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './preorder-button.component.html',
  styleUrl: './preorder-button.component.css',
})
export class PreorderButtonComponent {
  btnBgColor = input<string>('');
  btnBgHovColor = input<string>('');
  btnColor = input<string>('');
  btnHovColor = input<string>('');
  isHovered = false;

}
