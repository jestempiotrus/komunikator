import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared.module'
import { UiModule } from './ui/ui.module'

const sharedModules = [
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
