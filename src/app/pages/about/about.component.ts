import { Component, EventEmitter, Output  } from '@angular/core';
import { Router } from '@angular/router';
import {UserDataService} from "../../core/ui/services/userData.service";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {

   constructor(private router: Router, public userData: UserDataService) { }

  @Output() zalogujclick = new EventEmitter<string>();
  haslo = '';

  zaloguj(){
    console.log(this.haslo);
    this.zalogujclick.emit(this.haslo);
    this.router.navigate(['/chat']);

  }




  cards = [
    { 
      title: 'About',
      content: 'This is an Angular Seed on StackBlitz',
    },
    { 
      title: 'Adding new pages',
      content: '',
      items: [
        'Create your component: <code>pages/my-thing.component.ts</code>',
        'Declare component in <code>pages/page.module.ts</code>',
        'Add routes to component in <code>app-routing.module.ts</code>',
        'Update navigation in <code>app.config.ts</code>',
      ]
    },
    { 
      title: 'Dependencies',
      items: [
        'Angular 5.2.1',
        '@ngrx/store 4.1.1',
        'Bootstrap 4',
        'Font Awesome 4.7',
      ]
    }
  ]

}
