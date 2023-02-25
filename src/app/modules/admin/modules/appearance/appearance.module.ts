import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appearanceRoutes } from './appearance.routes';

@NgModule({
  imports: [RouterModule.forChild(appearanceRoutes)],
})
export class AppearanceModule {}
