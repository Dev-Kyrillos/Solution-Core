import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HomePage } from './Home-Page/home-page';
import { WhoWeAre } from './who-we-are/who-we-are';
import { ContactUs } from './contact-us/contact-us';
import { OurServices } from './our-services/our-services';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter([
      { path: '', component: HomePage },
      { path: 'who-we-are', component: WhoWeAre },
      { path: 'contact-us', component: ContactUs },
      { path: 'our-services', component: OurServices },
    ]),
  ]
};
