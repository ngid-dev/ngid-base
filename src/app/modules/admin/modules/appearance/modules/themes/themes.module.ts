import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppearanceSharedModule } from '../../shared/shared.module';
import { ThemesComponent } from './themes.component';
import { themesRoutes } from './themes.routes';

@NgModule({
  imports: [AppearanceSharedModule, RouterModule.forChild(themesRoutes)],
  declarations: [ThemesComponent],
})
export class ThemesModule {}
