import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalService } from '../global/global.service';
import { Service } from '../utils';

@Component({
  template: '',
})
export abstract class Base implements OnInit {
  public isLoading: boolean;
  public isProcessing: boolean;
  public formGroup: FormGroup;
  public globalService: GlobalService;

  protected formBuilder: FormBuilder;
  protected abstract onBaseInit(): void;
  constructor(@Inject(String) public moduleCode: string) {
    this.formGroup = new FormGroup({});
    this.formBuilder = new FormBuilder();
    this.globalService = Service.injector.get(GlobalService);
  }

  ngOnInit(): void {
    this.setStateLoading();
    this.onBaseInit();
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
}
