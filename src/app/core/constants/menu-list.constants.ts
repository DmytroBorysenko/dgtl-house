import {MenuItem} from '../models/menu-item.interface';

export const MENU_LIST: MenuItem[] = [
  {name: $localize`:@@nav.home:Home`, path: '/'},
  {
    name: $localize`:@@nav.work:Work`,
    path: '/work',
    children: [
      {
        name: $localize`:@@nav.cases:Cases`,
        path: '/work/cases',
        icon: 'cases',
        desc: $localize`:@@nav.desc.cases:Our successful projects and client results`,
      },
      {
        name: $localize`:@@nav.inHouseTools:In-house Tools`,
        path: '/work/in-house-tools',
        icon: 'industries',
        desc: $localize`:@@nav.desc.inHouseTools:Proprietary tools we built for better results`,
      },
      {
        name: $localize`:@@nav.reviews:Reviews`,
        path: '/work/reviews',
        icon: 'review',
        desc: $localize`:@@nav.desc.reviews:What our clients say about working with us`,
      },
    ],
  },
  {
    name: $localize`:@@nav.services:Services`,
    path: '/services',
    children: [
      {
        name: $localize`:@@nav.seo:SEO`,
        path: '/services/seo',
        icon: 'services/seo',
        desc: $localize`:@@nav.desc.seo:Search engine optimization to grow organic traffic`,
      },
      {
        name: $localize`:@@nav.ppc:PPC`,
        path: '/services/ppc',
        icon: 'services/ppc',
        desc: $localize`:@@nav.desc.ppc:Pay-per-click advertising for immediate results`,
      },
      {
        name: $localize`:@@nav.displayAds:Display Ads`,
        path: '/services/display-ads',
        icon: 'services/display-ads',
        desc: $localize`:@@nav.desc.displayAds:Banner and display advertising campaigns`,
      },
      {
        name: $localize`:@@nav.emailMarketing:Email Marketing`,
        path: '/services/email-marketing',
        icon: 'services/email-marketing',
        desc: $localize`:@@nav.desc.emailMarketing:Email campaigns that engage and convert`,
      },
      {
        name: $localize`:@@nav.webDev:Web Development`,
        path: '/services/web-dev',
        icon: 'services/web-dev',
        desc: $localize`:@@nav.desc.webDev:Custom websites built for performance`,
      },
      {
        name: $localize`:@@nav.analytics:Analytics`,
        path: '/services/analytics',
        icon: 'services/analytics',
        desc: $localize`:@@nav.desc.analytics:Data-driven insights and reporting`,
      },
      {
        name: $localize`:@@nav.serm:SERM`,
        path: '/services/serm',
        icon: 'services/serm',
        desc: $localize`:@@nav.desc.serm:Search engine reputation management`,
      },
      {
        name: $localize`:@@nav.strategy:Strategy`,
        path: '/services/strategy',
        icon: 'services/strategy',
        desc: $localize`:@@nav.desc.strategy:Comprehensive digital marketing strategy`,
      },
    ],
  },
  {name: $localize`:@@nav.about:About`, path: '/about'},
  {name: $localize`:@@nav.contact:Contact`, path: '/contact'},
];
