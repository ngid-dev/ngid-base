import { Component } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
} from '@angular/router';
import { BaseComponent } from 'src/app/core/base';
import { BreadcrumbModel } from './breadcrumb.model';

@Component({
  selector: 'admin-layout-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent extends BaseComponent {
  public breadcrumbs: Array<BreadcrumbModel>;
  constructor(private route: ActivatedRoute) {
    super('module.admin.layout.component.breadcrumb');
  }

  protected onInit(): void {
    this.setStateInitialization();
    this.listenRouteChanges();
    this.setStateReady();
  }

  private setStateInitialization(): void {
    this.breadcrumbs = new Array();
  }

  private listenRouteChanges(): void {
    this.createBreadcrumb(this.route.root.snapshot);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = new Array();
        this.createBreadcrumb(this.route.root.snapshot);
      }
    });
  }

  private createBreadcrumb(snapshot: ActivatedRouteSnapshot): void {
    if (snapshot.data.breadcrumb && snapshot.url.length) {
      const url = snapshot.pathFromRoot
        .map((path) => path.url[0]?.path)
        .filter((path) => path)
        .join('/');
      this.breadcrumbs.push({
        translationKey: snapshot.data.breadcrumb,
        routerLink: `/${url}`,
      });
    }

    if (snapshot.firstChild) {
      this.createBreadcrumb(snapshot.firstChild);
    }
  }
}
