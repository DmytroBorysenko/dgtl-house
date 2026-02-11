export interface MenuItem {
  name: string;
  path: string;
  children?: MenuChild[];
}

export interface MenuChild {
  name: string;
  path: string;
  icon: string;
  desc: string;
}
