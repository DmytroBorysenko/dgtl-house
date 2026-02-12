import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrl: './web-dev.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebDevComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@webDev.meta.title:Web Development — DGTL House`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@webDev.meta.description:Custom websites built for performance.` });
  }
}
