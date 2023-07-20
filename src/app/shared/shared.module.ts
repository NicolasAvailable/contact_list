import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { NewModalComponent } from './components/new-modal/new-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    EditModalComponent,
    NewModalComponent
  ],
  exports: [
    EditModalComponent,
    NewModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
