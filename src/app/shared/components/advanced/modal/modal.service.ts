import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VariantEnum } from 'src/app/core/enum';
import { IModal } from 'src/app/core/interfaces/modal.interface';
import { IModalOptions } from '../../../../core/interfaces';
import { PopupService } from '../popup';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService implements IModal {
  constructor(private _popupService: PopupService) {}

  public saveConfirmation(config: IModalOptions = {}): Observable<boolean> {
    const defaultConfig: IModalOptions = {
      header: 'app.modal.header.saveConfirmation',
      message: 'app.modal.message.saveConfirmation',
    };
    return this._popupService.open(ModalComponent, {
      ...defaultConfig,
      ...config,
    });
  }

  public deleteConfirmation(config: IModalOptions = {}): Observable<boolean> {
    const defaultConfig: IModalOptions = {
      header: 'app.modal.header.deleteConfirmation',
      message: 'app.modal.message.deleteConfirmation',
      positiveButton: 'app.button.delete',
    };
    return this._popupService.open(ModalComponent, {
      ...defaultConfig,
      ...config,
      variant: VariantEnum.DANGER,
    });
  }

  public leaveConfirmation(config: IModalOptions = {}): Observable<boolean> {
    const defaultConfig: IModalOptions = {
      header: 'app.modal.header.leaveConfirmation',
      message: 'app.modal.message.leaveConfirmation',
      negativeButton: 'app.button.leaveThisPage',
      positiveButton: 'app.button.stayOnThisPage',
    };
    return this._popupService.open(ModalComponent, {
      ...defaultConfig,
      ...config,
      variant: VariantEnum.INFO,
    });
  }
}
