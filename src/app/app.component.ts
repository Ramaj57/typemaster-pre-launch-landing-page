import { Component } from '@angular/core';
import { PreorderButtonComponent } from "./preorder-button/preorder-button.component";
import { FeaturesCardComponent } from "./features-card/features-card.component";
import { buttonData, cardData } from '../data';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PreorderButtonComponent, FeaturesCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'typemaster-pre-launch-landing-page';
  cards = cardData;
  button = buttonData;
}
