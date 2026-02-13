import {RenderMode, ServerRoute} from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {path: '', renderMode: RenderMode.Prerender},
  {path: 'work', renderMode: RenderMode.Prerender},
  {path: 'work/cases', renderMode: RenderMode.Prerender},
  {path: 'work/in-house-tools', renderMode: RenderMode.Prerender},
  {path: 'work/reviews', renderMode: RenderMode.Prerender},
  {path: 'services', renderMode: RenderMode.Prerender},
  {path: 'services/seo', renderMode: RenderMode.Prerender},
  {path: 'services/ppc', renderMode: RenderMode.Prerender},
  {path: 'services/display-ads', renderMode: RenderMode.Prerender},
  {path: 'services/email-marketing', renderMode: RenderMode.Prerender},
  {path: 'services/web-dev', renderMode: RenderMode.Prerender},
  {path: 'services/analytics', renderMode: RenderMode.Prerender},
  {path: 'services/serm', renderMode: RenderMode.Prerender},
  {path: 'services/strategy', renderMode: RenderMode.Prerender},
  {path: 'about', renderMode: RenderMode.Prerender},
  {path: 'privacy-policy', renderMode: RenderMode.Prerender},
  {path: 'contact', renderMode: RenderMode.Prerender},
  {path: '**', renderMode: RenderMode.Client},
];
