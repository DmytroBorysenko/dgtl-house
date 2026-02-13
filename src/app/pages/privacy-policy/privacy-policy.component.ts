import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'dgtl-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicyComponent {
  readonly #title = inject(Title);
  readonly #meta = inject(Meta);

  constructor() {
    this.#title.setTitle($localize`:@@privacyPolicy.meta.title:Privacy Policy — DGTL House`);
    this.#meta.updateTag({
      name: 'description',
      content: $localize`:@@privacyPolicy.meta.description:DGTL House Privacy Policy. Learn how we collect, use, and protect your personal data, cookies, and your rights.`,
    });
  }
}
