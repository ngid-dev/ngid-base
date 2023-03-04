import { NgModule } from '@angular/core';
import { PostsSharedModule } from '../../../../../shared/shared.module';
import { PopupFormComponent } from './form.component';
import { PopupFormService } from './form.service';

@NgModule({
  imports: [PostsSharedModule],
  declarations: [PopupFormComponent],
  providers: [PopupFormService],
  exports: [PopupFormComponent],
})
export class PopupFormModule {}
