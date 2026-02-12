import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'work',
    loadComponent: () => import('./pages/work/work.component').then(m => m.WorkComponent),
  },
  {
    path: 'work/cases',
    loadComponent: () => import('./pages/work/pages/cases/cases.component').then(m => m.CasesComponent),
  },
  {
    path: 'work/in-house-tools',
    loadComponent: () => import('./pages/work/pages/in-house-tools/in-house-tools.component').then(m => m.InHouseToolsComponent),
  },
  {
    path: 'work/reviews',
    loadComponent: () => import('./pages/work/pages/reviews/reviews.component').then(m => m.ReviewsComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
  },
  {
    path: 'services/seo',
    loadComponent: () => import('./pages/services/pages/seo/seo.component').then(m => m.SeoComponent),
  },
  {
    path: 'services/ppc',
    loadComponent: () => import('./pages/services/pages/ppc/ppc.component').then(m => m.PpcComponent),
  },
  {
    path: 'services/display-ads',
    loadComponent: () => import('./pages/services/pages/display-ads/display-ads.component').then(m => m.DisplayAdsComponent),
  },
  {
    path: 'services/email-marketing',
    loadComponent: () => import('./pages/services/pages/email-marketing/email-marketing.component').then(m => m.EmailMarketingComponent),
  },
  {
    path: 'services/web-dev',
    loadComponent: () => import('./pages/services/pages/web-dev/web-dev.component').then(m => m.WebDevComponent),
  },
  {
    path: 'services/analytics',
    loadComponent: () => import('./pages/services/pages/analytics/analytics.component').then(m => m.AnalyticsComponent),
  },
  {
    path: 'services/serm',
    loadComponent: () => import('./pages/services/pages/serm/serm.component').then(m => m.SermComponent),
  },
  {
    path: 'services/strategy',
    loadComponent: () => import('./pages/services/pages/strategy/strategy.component').then(m => m.StrategyComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
