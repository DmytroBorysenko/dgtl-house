import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dgtl-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly siteInfo = {
    email: 'marketing@dgtl-house.com',
    phone: '+1 224 584 8401',
    phoneTel: '+12245848401',
    address: '1635 Eagle Grove ct, Wheeling, IL 60090',
  };
}
