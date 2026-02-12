import { HttpClient } from '@angular/common/http';
import { inject, Injectable, LOCALE_ID, signal } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SiteApiResponse } from '../models/site-api-response.interface';
import { SiteInfo } from '../models/site-info.interface';
import { TemplateFormsId } from '../models/template-forms-id.interface';

@Injectable({ providedIn: 'root' })
export class SiteService {
  readonly #http = inject(HttpClient);
  readonly #locale = inject(LOCALE_ID);

  readonly siteInfo = signal<SiteInfo>({
    email: 'marketing@dgtl-house.com',
    phone: '+1 224 584 8401',
    phoneTel: '+12245848401',
    address: '1635 Eagle Grove ct, Wheeling, IL 60090',
  });

  readonly templateFormsId = signal<TemplateFormsId>({
    bookACallForm: 233,
    briefForm: 226,
    callbackForm: 225,
    jobForm: 232,
    subscribeForm: 234,
  });

  loadInfo(): void {
    const lang = this.#locale.split('-')[0];

    this.#http
      .get<SiteApiResponse>(`${environment.apiUrl}/options/list`, { params: { lang } })
      .pipe(
        catchError((err) => {
          console.warn('Failed to load site info:', err);
          return EMPTY;
        }),
      )
      .subscribe((res) => {
        this.siteInfo.set({
          email: res.email || this.siteInfo().email,
          phone: res.phone || this.siteInfo().phone,
          phoneTel: (res.phone || this.siteInfo().phone).replace(/\D/g, ''),
          address: res.address || this.siteInfo().address,
        });

        this.templateFormsId.set({
          bookACallForm: res.book_a_call_form || this.templateFormsId().bookACallForm,
          briefForm: res.brief_form || this.templateFormsId().briefForm,
          callbackForm: res.callback_form || this.templateFormsId().callbackForm,
          jobForm: res.job_form || this.templateFormsId().jobForm,
          subscribeForm: res.subscribe_form || this.templateFormsId().subscribeForm,
        });
      });
  }
}
