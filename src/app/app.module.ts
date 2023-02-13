import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appInitializer } from './app.factory';
import { AppService } from './app.service';
import { InterceptorsModule } from './core/interceptors/interceptors.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, SharedModule, HttpClientModule, InterceptorsModule],
  declarations: [AppComponent],
  providers: [
    AppService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [AppService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
