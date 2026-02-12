import { ChangeDetectionStrategy, Component, computed, inject, LOCALE_ID, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { LANG_OPTIONS } from '../../core/constants/lang.constants';
import { LangOption } from '../../core/models/lang-option.interface';

@Component({
  selector: 'dgtl-lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrl: './lang-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangSwitcherComponent {
  readonly #locale = inject(LOCALE_ID);
  readonly #router = inject(Router);
  readonly #doc = inject(DOCUMENT);

  readonly options = LANG_OPTIONS;
  readonly isOpen = signal(false);
  readonly selectedLang = computed(() => {
    const code = this.#locale.split('-')[0];
    return this.options.find(o => o.value === code) ?? this.options[0];
  });

  toggle(): void {
    this.isOpen.update(v => !v);
  }

  getLocaleUrl(target: LangOption): string {
    const current = this.selectedLang();
    if (target.value === current.value) return '';

    const routePath = this.#router.url;
    const deployBase = this.#getDeployBase();
    const targetLocale = target.path ? target.path.slice(1) : '';

    if (targetLocale) {
      return deployBase + targetLocale + (routePath === '/' ? '' : routePath);
    }

    return deployBase.slice(0, -1) + (routePath === '/' ? '/' : routePath);
  }

  #getDeployBase(): string {
    const baseHref = this.#doc.querySelector('base')?.getAttribute('href') || '/';
    const currentPath = this.selectedLang().path;

    if (currentPath) {
      const suffix = currentPath.slice(1) + '/';
      if (baseHref.endsWith(suffix)) {
        return baseHref.slice(0, -suffix.length);
      }
    }

    return baseHref;
  }
}
