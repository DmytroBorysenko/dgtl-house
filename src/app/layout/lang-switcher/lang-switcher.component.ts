import { ChangeDetectionStrategy, Component, computed, inject, LOCALE_ID, signal } from '@angular/core';
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

    let path = this.#router.url;

    // Strip current locale prefix
    if (current.path && path.startsWith(current.path + '/')) {
      path = path.substring(current.path.length);
    } else if (current.path && path === current.path) {
      path = '/';
    }

    // Add target locale prefix
    if (target.path) {
      return target.path + (path === '/' ? '' : path);
    }

    return path || '/';
  }
}
