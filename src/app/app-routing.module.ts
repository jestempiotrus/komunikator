import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AboutComponent } from './pages/about/about.component'
import { HomeComponent } from './pages/home/home.component'
import { ChatComponent } from './pages/chat/chat.component'


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: false }) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
