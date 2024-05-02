import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

const sharedModules = [
  CommonModule,
  FormsModule,
  RouterModule,
  ToastModule,
  MessagesModule
]

@NgModule({
  imports: [
    ...sharedModules,
  ],
  exports: [
    ...sharedModules,
  ],
  providers: [
        MessageService
  ],
})
export class SharedModule { }

