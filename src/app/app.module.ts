import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appInitializer } from './app.factory';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, SharedModule, HttpClientModule],
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
