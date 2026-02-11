import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@contact.meta.title:Contact — DGTL House`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@contact.meta.description:Get in touch with DGTL House. We are ready to help your business grow.` });
  }
}
