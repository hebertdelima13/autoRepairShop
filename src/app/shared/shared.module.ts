import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarnavComponent } from './sidebarnav/sidebarnav.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';

const components = [SidebarnavComponent, HeaderComponent, ButtonComponent];

@NgModule({
  declarations: [SidebarnavComponent, ButtonComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [...components],
})
export class SharedModule {}
