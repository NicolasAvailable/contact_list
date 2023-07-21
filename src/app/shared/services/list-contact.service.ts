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

  // this gets the contacts in the BehaviorSubect
  get getContacts(): Observable<Contact[]>{
    return this.contacts;
  }

  // this sets contacts in the BehaviorSubject
  set setContacts(contacts: Contact[]){
    this.contacts.next(contacts)
  }

  // this function finds a contact inside the array
  getOneContact(id: number){
    const currentContacts = this.contacts.value;
    const contactFound = currentContacts.find(contact => contact.id === Number(id))
    return contactFound ? contactFound : {} as Contact
  }

  // this function creates a new contact
  createContact(contact: Contact){
    const currentContacts = this.contacts.value;
    currentContacts.push(contact)
    return this.contacts.next(currentContacts)
  }

  // this function updates a conatct
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

  // this function deletes a contact
  deleteContact(id: number){
    const currentContacts = this.contacts.value;
    const newContacts = currentContacts.filter(contact => contact.id !== id)
    console.log(newContacts);
    this.contacts.next([...newContacts])
    return
  }


}
