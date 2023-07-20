import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id/contact-details',
    component: ContactDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
