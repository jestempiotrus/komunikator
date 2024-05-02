import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { SharedModule } from './shared.module'
import { UiModule } from './ui/ui.module'
import { ContextService } from './services/context.service'
import {UserDataService} from "./ui/services/userData.service";


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
    ContextService,
    UserDataService,
  ]
})
export class CoreModule { }
