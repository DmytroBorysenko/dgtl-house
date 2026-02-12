import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-in-house-tools',
  templateUrl: './in-house-tools.component.html',
  styleUrl: './in-house-tools.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InHouseToolsComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@inHouseTools.meta.title:In-house Tools — DGTL House`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@inHouseTools.meta.description:Proprietary tools we built for better results.` });
  }
}
