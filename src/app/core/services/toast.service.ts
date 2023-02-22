import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstant } from '../constant/app.constant';
import { IToastOptions } from '../interfaces';
import { VariantType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private _translateService: TranslateService) {}

  public showInfo(message: string, options?: IToastOptions): void {
    this.createToast(message, 'INFO', 'fas fa-circle-info', options);
  }

  public showSuccess(message: string, options?: IToastOptions): void {
    this.createToast(message, 'SUCCESS', 'fas fa-circle-check', options);
  }

  public showWarning(message: string, options?: IToastOptions): void {
    this.createToast(message, 'WARNING', 'fas fa-circle-exclamation', options);
  }

  public showError(message: string, options?: IToastOptions): void {
    this.createToast(message, 'DANGER', 'fas fa-triangle-exclamation', options);
  }

  private createToast(
    message: string,
    variant: VariantType,
    icon: string,
    options?: IToastOptions
  ): void {
    const position = options?.position
      ? options.position.toLowerCase()
      : 'top-right';

    let customToastWrapperElement = document
      .getElementsByClassName(`custom-toast-wrapper ${position}`)
      .item(0) as HTMLElement;

    if (!customToastWrapperElement) {
      customToastWrapperElement = document.createElement('div');

      customToastWrapperElement.classList.add(
        'custom-toast-wrapper',
        position.toLocaleLowerCase()
      );

      document.body.appendChild(customToastWrapperElement);
    }

    const customToastElement = document.createElement('div');
    customToastElement.classList.add('custom-toast', variant.toLowerCase());

    const customToastIconElement = document.createElement('div');
    customToastIconElement.classList.add('custom-toast-icon');
    const emElement = document.createElement('em');
    emElement.classList.add(...icon.split(' '));
    customToastIconElement.appendChild(emElement);
    customToastElement.appendChild(customToastIconElement);

    const customToastContentElement = document.createElement('div');
    customToastContentElement.classList.add('custom-toast-content');
    const pElement = document.createElement('p');
    pElement.textContent = this._translateService.instant(message || '');
    customToastContentElement.appendChild(pElement);
    customToastElement.appendChild(customToastContentElement);

    customToastWrapperElement.appendChild(customToastElement);

    setTimeout(() => {
      customToastWrapperElement.removeChild(customToastElement);
      if (customToastWrapperElement.children.length === 0) {
        document.body.removeChild(customToastWrapperElement);
      }
    }, options?.timeOut || AppConstant.create().TOAST_TIMEOUT);
  }
}
