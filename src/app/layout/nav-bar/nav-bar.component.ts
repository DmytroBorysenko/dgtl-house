import { ChangeDetectionStrategy, Component, computed, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import { MENU_LIST } from '../../core/constants/menu-list.constants';

@Component({
  selector: 'dgtl-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:mouseover)': 'onDocumentMouseOver($event)',
    '(document:keydown.escape)': 'onEscapeKey()',
  },
})
export class NavBarComponent {
  readonly #platformId = inject(PLATFORM_ID);
  readonly #router = inject(Router);

  readonly menuList = MENU_LIST;
  readonly isMobileMenuOpen = signal(false);
  readonly openSubmenuIndex = signal<number | null>(null);

  readonly #currentUrl = toSignal(
    this.#router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(e => e.urlAfterRedirects.split('?')[0].split('#')[0]),
      startWith(this.#router.url.split('?')[0].split('#')[0]),
    ),
    { initialValue: '/' },
  );

  readonly activePage = computed(() => {
    const url = this.#currentUrl();
    const item = this.menuList.find(m => m.path === url);
    return item?.name ?? this.menuList[0].name;
  });

  readonly mobileCta = computed(() => {
    const url = this.#currentUrl();
    const contactItem = this.menuList.find(m => m.path === '/contact');
    const homeItem = this.menuList.find(m => m.path === '/');

    if (url === '/contact') {
      return { path: '/', label: homeItem?.name ?? 'Home' };
    }
    return { path: '/contact', label: contactItem?.name ?? 'Contact' };
  });

  toggleMobileMenu(): void {
    const open = !this.isMobileMenuOpen();
    this.isMobileMenuOpen.set(open);
    if (isPlatformBrowser(this.#platformId)) {
      document.body.style.overflow = open ? 'hidden' : '';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    if (isPlatformBrowser(this.#platformId)) {
      document.body.style.overflow = '';
    }
  }

  toggleSubmenu(index: number): void {
    this.openSubmenuIndex.set(this.openSubmenuIndex() === index ? null : index);
  }

  openSubmenu(index: number): void {
    this.openSubmenuIndex.set(index);
  }

  isSubmenuOpen(index: number): boolean {
    return this.openSubmenuIndex() === index;
  }

  navigateTo(path: string): void {
    this.#router.navigate([path]);
    this.openSubmenuIndex.set(null);
    this.closeMobileMenu();
  }

  onDocumentMouseOver(event: MouseEvent): void {
    if (this.openSubmenuIndex() === null) return;
    const target = event.target as HTMLElement;
    if (target.closest('.sub-menu-overlay') || target.closest('.nav-item')) return;
    this.openSubmenuIndex.set(null);
  }

  onEscapeKey(): void {
    if (this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    } else if (this.openSubmenuIndex() !== null) {
      this.openSubmenuIndex.set(null);
    }
  }
}
