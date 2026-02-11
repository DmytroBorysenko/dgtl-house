import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@home.meta.title:DGTL House — Digital Marketing Agency`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@home.meta.description:DGTL House is a digital marketing agency that helps businesses grow online.` });
  }
}
