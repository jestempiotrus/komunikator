import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { PasswordModule } from 'primeng/password';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

import {CoreModule} from './core/core.module';
import {PagesModule} from './pages/pages.module';
import {StateModule} from './state/state.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';



@NgModule({
  imports: [ BrowserModule, CoreModule, PagesModule, StateModule, AppRoutingModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
