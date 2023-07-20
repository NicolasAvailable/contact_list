import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/shared/interfaces/contact';
import { ListContactService } from 'src/app/shared/services/list-contact.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  contacts: Contact[] = [];

  searchContact = new FormControl('');

  constructor(public listContact: ListContactService,
              private router: Router,
              private storage: StorageService
  ){
  }
  
  ngOnInit(): void {
   
    this.listContact.getContacts.subscribe(contacts => {
      this.contacts = contacts
    })
  }

  seeContact(id: number){
    this.router.navigate([`${id}/contact-details`])
  }

  openModal(){
    this.listContact.showModal = true;
  }
}
