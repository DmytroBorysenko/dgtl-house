import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dgtl-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
