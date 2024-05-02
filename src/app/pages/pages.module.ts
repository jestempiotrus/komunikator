import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { StateModule } from '../state/state.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import {ButtonModule} from "primeng/button";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
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
    ToastModule,
    MessagesModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    TodoListComponent,
    TodoListItemComponent,
  ],
  providers: [
  MessageService,
  ]
})
export class PagesModule { }
