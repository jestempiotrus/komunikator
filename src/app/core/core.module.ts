import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared.module'
import { UiModule } from './ui/ui.module'
import { ContextService } from './services/context.service'

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

  providers: [
    ContextService
  ]
})
export class CoreModule { }
