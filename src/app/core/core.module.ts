import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared.module'
import { UiModule } from './ui/ui.module'

const sharedModules = [
    HttpClientModule,
    SharedModule,
    UiModule,
]

@NgModule({
  imports: [
    ...sharedModules,
  ],
  exports: [
    ...sharedModules,
  ],
})
export class CoreModule { }
