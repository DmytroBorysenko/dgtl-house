import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-serm',
  templateUrl: './serm.component.html',
  styleUrl: './serm.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SermComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@serm.meta.title:SERM — DGTL House`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@serm.meta.description:Search engine reputation management.` });
  }
}
