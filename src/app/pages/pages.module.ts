import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ContactDetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
