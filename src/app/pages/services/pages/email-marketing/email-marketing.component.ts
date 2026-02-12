import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-email-marketing',
  templateUrl: './email-marketing.component.html',
  styleUrl: './email-marketing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailMarketingComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@emailMarketing.meta.title:Email Marketing — DGTL House`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@emailMarketing.meta.description:Email campaigns that engage and convert.` });
  }
}
