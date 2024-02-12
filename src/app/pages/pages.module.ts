import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { StateModule } from '../state/state.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import {ButtonModule} from "primeng/button";
import { PasswordModule } from 'primeng/password';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  imports: [
    CoreModule,
    StateModule,
    ButtonModule,
    PasswordModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
  ],
  declarations: [
    AboutComponent,
    HomeComponent,
    ChatComponent,
    TodoListComponent,
    TodoListItemComponent,
  ],
})
export class PagesModule { }
