import { MenuItem } from '../models/menu-item.interface';

export const MENU_LIST: MenuItem[] = [
  { name: $localize`:@@nav.home:Home`, path: '/' },
  { name: $localize`:@@nav.about:About`, path: '/about' },
  { name: $localize`:@@nav.contact:Contact`, path: '/contact' },
];
