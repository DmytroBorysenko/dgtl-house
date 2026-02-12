import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-seo',
  templateUrl: './seo.component.html',
  styleUrl: './seo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeoComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@seo.meta.title:SEO — DGTL House`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@seo.meta.description:Search engine optimization to grow organic traffic.` });
  }
}
