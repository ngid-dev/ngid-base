import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalService } from '../global/global.service';
import { Logger, Service } from '../utils';

@Component({
  template: '',
})
export abstract class Base implements OnInit, OnDestroy {
  public isLoading: boolean;
  public isProcessing: boolean;
  public formGroup: FormGroup;
  public globalService: GlobalService;

  protected formBuilder: FormBuilder;
  protected router: Router;
  protected logger: Logger;
  protected subscription: Subscription;
  protected abstract onBaseInit(): void;
  protected onDestroy?(): void;
  constructor(@Inject(String) public moduleCode: string) {
    this.formGroup = new FormGroup({});
    this.formBuilder = new FormBuilder();
    this.globalService = Service.injector.get(GlobalService);
    this.router = Service.injector.get(Router);
    this.logger = new Logger(this, this.globalService.config.loggerLevel);
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.setStateLoading();
    this.onBaseInit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if (!this.onDestroy) return;
    this.onDestroy();
  }

  public setStateLoading(): void {
    this.isLoading = true;
  }

  public setStateProcessing(): void {
    this.formGroup.disable();
    this.isProcessing = true;
  }

  public setStateReady(): void {
    this.isLoading = false;
    this.isProcessing = false;
    this.formGroup.enable();
  }

  public setStateDisable(): void {
    this.isLoading = false;
    this.isProcessing = false;
    this.formGroup.disable();
  }

  public validate(): void {
    this.formGroup.markAllAsTouched();
  }
}
