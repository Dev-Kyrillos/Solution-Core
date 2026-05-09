import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhyUs } from '../why-us/why-us';

@Component({
  selector: 'app-who-we-are-home',
  standalone: true,
  imports: [RouterLink, WhyUs],
  templateUrl: './who-we-are-home.html',
  styleUrl: './who-we-are-home.css',
})
export class WhoWeAreHome {

}
