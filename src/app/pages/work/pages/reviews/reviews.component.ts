import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@reviews.meta.title:Reviews — DGTL House`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@reviews.meta.description:What our clients say about working with us.` });
  }
}
