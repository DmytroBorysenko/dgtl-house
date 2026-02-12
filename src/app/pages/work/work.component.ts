import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@work.meta.title:Work — DGTL House`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@work.meta.description:Explore our work — cases, tools, and client reviews.` });
  }
}
