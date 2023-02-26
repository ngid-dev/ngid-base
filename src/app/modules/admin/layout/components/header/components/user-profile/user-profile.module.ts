import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'src/app/shared/components/advanced/dropdown/dropdown.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  imports: [CommonModule, DropdownModule, RouterModule],
  declarations: [UserProfileComponent],
  exports: [UserProfileComponent],
})
export class UserProfileModule {}
