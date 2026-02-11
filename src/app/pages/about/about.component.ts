import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@about.meta.title:About Us — DGTL House`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@about.meta.description:Learn about DGTL House — our team, mission, and values.` });
  }
}
