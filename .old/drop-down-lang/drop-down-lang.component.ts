import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UntilDestroy} from '@ngneat/until-destroy';
import {LANG_CONSTANT} from '../../entities/constants/lang.constants';
import {ILangOption} from '../../entities/interfaces/lang.interface';

@UntilDestroy()
@Component({
  selector: 'dgtl-drop-down-lang',
  templateUrl: './drop-down-lang.component.html',
  styleUrls: ['./drop-down-lang.component.scss'],
})
export class DropDownLangComponent implements OnInit {
  isActive = false;
  selectedLang: ILangOption = LANG_CONSTANT[0]; // За замовчуванням EN
  readonly options = LANG_CONSTANT;

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Нормалізуємо locale (може бути 'en-US', 'en_US' тощо)
    const normalizedLocale = this.locale.toLowerCase().split(/[-_]/)[0];
    const found = this.options.find((x) => x.value === normalizedLocale);
    if (found) {
      this.selectedLang = found;
    }
  }

  public setActive(): void {
    this.isActive = !this.isActive;
  }

  getLocaleUrl(targetLocale: string): string {
    if (targetLocale === this.selectedLang.value) {
      return '';
    }

    const currentPath = this.router.url;
    const targetLocaleConfig = this.options.find((l) => l.value === targetLocale);

    if (!targetLocaleConfig) {
      return '/';
    }

    // Видаляємо поточний базовий шлях локалі
    let cleanPath = currentPath;
    if (this.selectedLang.value === 'uk' && cleanPath.startsWith('/ua/')) {
      cleanPath = cleanPath.substring(3);
    } else if (this.selectedLang.value === 'uk' && cleanPath === '/ua') {
      cleanPath = '/';
    } else if (cleanPath === '/') {
      cleanPath = '/';
    }

    // Додаємо новий базовий шлях
    if (targetLocale === 'uk') {
      return `/ua${cleanPath === '/' ? '' : cleanPath}`;
    }

    return cleanPath === '/' ? '/' : cleanPath;
  }
}
