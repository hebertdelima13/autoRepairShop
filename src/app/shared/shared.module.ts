import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarnavComponent } from './components/sidebarnav/sidebarnav.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';

const components = [SidebarnavComponent, HeaderComponent, ButtonComponent];

@NgModule({
  declarations: [SidebarnavComponent, ButtonComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [...components],
})
export class SharedModule {}
