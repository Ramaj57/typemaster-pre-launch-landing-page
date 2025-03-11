import { Component, input } from '@angular/core';

@Component({
  selector: 'app-features-card',
  standalone: true,
  imports: [],
  templateUrl: './features-card.component.html',
  styleUrl: './features-card.component.css'
})
export class FeaturesCardComponent {
  src = input<string>('');
  alt = input<string>('');
  feature = input<string>('');
  description = input<string>('');
}
