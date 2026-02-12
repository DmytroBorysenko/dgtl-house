import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-ppc',
  templateUrl: './ppc.component.html',
  styleUrl: './ppc.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PpcComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@ppc.meta.title:PPC — DGTL House`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@ppc.meta.description:Pay-per-click advertising for immediate results.` });
  }
}
