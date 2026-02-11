import { Component } from '@angular/core';

@Component({
  selector: 'dgtl-hero',
  template: `
    <section class="hero-block">
      <h1 i18n="@@home.hero.title" class="title">A full-funnel digital marketing agency</h1>
      <p i18n="@@home.hero.description" class="description">You can always be a better, reach higher results, and
        exceed expectations with our advanced AI tools and deep expertise across the digital marketing funnel. We
        empower clients to enhance revenue, boost brand visibility and loyalty, and grow their customer base
        effectively</p>
    </section>
  `,
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
