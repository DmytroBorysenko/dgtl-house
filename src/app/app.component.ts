import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavBarComponent} from './layout/nav-bar/nav-bar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {LangSwitcherComponent} from './layout/lang-switcher/lang-switcher.component';
import {PrivacyConsentComponent} from './layout/privacy-consent/privacy-consent.component';
import {SiteService} from './core/services/site.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent, LangSwitcherComponent, PrivacyConsentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly #siteService = inject(SiteService);

  constructor() {
    this.#siteService.loadInfo();
  }
}
