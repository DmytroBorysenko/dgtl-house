import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-display-ads',
  templateUrl: './display-ads.component.html',
  styleUrl: './display-ads.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayAdsComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@displayAds.meta.title:Display Ads — DGTL House`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@displayAds.meta.description:Banner and display advertising campaigns.` });
  }
}
