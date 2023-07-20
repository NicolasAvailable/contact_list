import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from "rxjs";
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ListContactService {

  private contacts: BehaviorSubject<Contact[]> = new BehaviorSubject<any[]>([]);
  showModal: boolean = false;

  constructor() { }

  get getContacts(): Observable<Contact[]>{
    return this.contacts;
  }

  set setContacts(contacts: Contact[]){
    this.contacts.next(contacts)
  }

  getOneContact(id: number){
    const currentContacts = this.contacts.value;
    const contactFound = currentContacts.find(contact => contact.id === Number(id))
    return contactFound ? contactFound : {} as Contact
  }

  createContact(contact: Contact){
    const currentContacts = this.contacts.value;
    currentContacts.push(contact)
    return this.contacts.next(currentContacts)
  }

  editContact(contact: Contact ,id: number){
    const currentContacts = this.contacts.value;
    const index = currentContacts.findIndex(contact => contact.id === id)
    if(index !== -1){
      const contactFound = currentContacts.find(contact => contact.id === id)
      currentContacts.splice(index, 1, contact)
      this.contacts.next(currentContacts)
      return
    }
    return
  }

  deleteContact(id: number){
    const currentContacts = this.contacts.value;
    const newContacts = currentContacts.filter(contact => contact.id !== id)
    console.log(newContacts);
    this.contacts.next([...newContacts])
    return
  }


}
