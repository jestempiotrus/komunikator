import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'seed-app',
  template: `
    <ui-layout>
      <router-outlet></router-outlet>
    </ui-layout>
  `,
})
export class AppComponent  {


}
