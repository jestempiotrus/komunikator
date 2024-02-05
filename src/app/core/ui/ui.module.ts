import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module'

import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { LayoutComponent } from './components/layout/layout.component'
import { MenubarModule } from 'primeng/menubar';

const components = [
  FooterComponent,
  HeaderComponent,
  LayoutComponent,
]

@NgModule({
  imports: [
    SharedModule,
    MenubarModule,
  ],
  declarations: [
    ...components,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  exports: [
    ...components,
  ],
})
export class UiModule { }
