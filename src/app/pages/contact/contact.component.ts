import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dgtl-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
