import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-cases',
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CasesComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@cases.meta.title:Cases — DGTL House`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@cases.meta.description:Our successful projects and client results.` });
  }
}
