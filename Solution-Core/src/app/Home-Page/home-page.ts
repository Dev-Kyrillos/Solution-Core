import { Component } from '@angular/core';
import { Info } from "../Components/info/info";
import { Vision } from "../Components/vision/vision";
import { RewiewSection } from "../Components/rewiew-section/rewiew-section";
import { ClientsSection } from "../Components/clients-section/clients-section";
import { WhyUs } from "../Components/why-us/why-us";
import { WhyUs2 } from "../Components/why-us-2/why-us-2";
import { SplitSection } from "../Components/split-section/split-section";
import { ServicesSection } from "../Components/services-section/services-section";
import { HeroSection } from "../Components/hero-section/hero-section";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Info, Vision, RewiewSection, ClientsSection, WhyUs, WhyUs2, SplitSection, ServicesSection, HeroSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
