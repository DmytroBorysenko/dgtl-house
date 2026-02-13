import {inject, Injectable, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const STORAGE_KEY = 'cookie-consent';

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

@Injectable({providedIn: 'root'})
export class CookieConsentService {
  readonly #platformId = inject(PLATFORM_ID);

  readonly consented = signal<boolean | null>(null);
  readonly preferences = signal<CookiePreferences>({...DEFAULT_PREFERENCES});

  constructor() {
    if (isPlatformBrowser(this.#platformId)) {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const data = JSON.parse(stored);
          this.preferences.set(data);
          this.consented.set(true);
        } catch {
          this.consented.set(null);
        }
      }
    }
  }

  acceptAll(): void {
    this.#save({necessary: true, analytics: true, marketing: true, functional: true});
  }

  rejectAll(): void {
    this.#save({...DEFAULT_PREFERENCES});
  }

  saveCustom(prefs: CookiePreferences): void {
    this.#save({...prefs, necessary: true});
  }

  #save(prefs: CookiePreferences): void {
    this.preferences.set(prefs);
    this.consented.set(true);
    if (isPlatformBrowser(this.#platformId)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    }
  }
}
