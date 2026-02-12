import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'dgtl-strategy',
  templateUrl: './strategy.component.html',
  styleUrl: './strategy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrategyComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@strategy.meta.title:Strategy — DGTL House`);
    this.#meta.updateTag({ name: 'description', content: $localize`:@@strategy.meta.description:Comprehensive digital marketing strategy.` });
  }
}
