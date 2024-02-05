import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const sharedModules = [
  CommonModule,
  FormsModule,
  RouterModule,
]

@NgModule({
  imports: [
    ...sharedModules,
  ],
  exports: [
    ...sharedModules,
  ],
})
export class SharedModule { }

