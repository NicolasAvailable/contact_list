import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setContacts(contacts: Contact[]){
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }

  get getContacts(){
    const contactsLocal = localStorage.getItem("contacts")
    return contactsLocal ? JSON.parse(contactsLocal) : []
  }
}
