import { Component } from '@angular/core';
import { PreorderButtonComponent } from "./preorder-button/preorder-button.component";
import { FeaturesCardComponent } from "./features-card/features-card.component";
import { buttonData, cardData } from '../data';
import { BlankSpaceComponent } from "./blank-space/blank-space.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PreorderButtonComponent, FeaturesCardComponent, BlankSpaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'typemaster-pre-launch-landing-page';
  cards = cardData;
  button = buttonData;
}
