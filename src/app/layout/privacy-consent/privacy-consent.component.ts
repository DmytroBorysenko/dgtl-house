import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {CookieConsentService, CookiePreferences} from '../../core/services/cookie-consent.service';

@Component({
  selector: 'dgtl-privacy-consent',
  templateUrl: './privacy-consent.component.html',
  styleUrl: './privacy-consent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyConsentComponent {
  readonly #cookieConsent = inject(CookieConsentService);

  readonly showCustomize = signal(false);
  readonly visible = computed(() => this.#cookieConsent.consented() === null);

  readonly customPrefs = signal<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  acceptAll(): void {
    this.#cookieConsent.acceptAll();
  }

  rejectAll(): void {
    this.#cookieConsent.rejectAll();
  }

  saveCustom(): void {
    this.#cookieConsent.saveCustom(this.customPrefs());
  }

  toggleCustomize(): void {
    this.showCustomize.update(v => !v);
  }

  togglePref(key: 'analytics' | 'marketing' | 'functional'): void {
    this.customPrefs.update(p => ({...p, [key]: !p[key]}));
  }
}
