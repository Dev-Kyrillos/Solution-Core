import { Component } from '@angular/core';
import { Vision } from '../Components/vision/vision';
import { ClientsSection } from '../Components/clients-section/clients-section';
import { WhoWeAreHome } from '../Components/who-we-are-home/who-we-are-home';
import { WhyUs2 } from '../Components/why-us-2/why-us-2';
import { WhoWeAreHero } from '../Components/who-we-are-hero/who-we-are-hero';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [Vision, ClientsSection, WhoWeAreHome, WhyUs2, WhoWeAreHero],
  templateUrl: './who-we-are.html',
  styleUrl: './who-we-are.css',
})
export class WhoWeAre {

}
