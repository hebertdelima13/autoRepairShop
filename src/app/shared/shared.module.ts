import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarnavComponent } from './sidebarnav/sidebarnav.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { PlacaPipe } from './pipes/placa/placa.pipe';

const components = [
  SidebarnavComponent,
  HeaderComponent,
  ButtonComponent,
  PlacaPipe,
];

@NgModule({
  declarations: [
    SidebarnavComponent,
    ButtonComponent,
    HeaderComponent,
    PlacaPipe,
  ],
  imports: [CommonModule],
  exports: [...components],
})
export class SharedModule {}
