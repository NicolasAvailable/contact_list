import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/shared/interfaces/contact';
import { ListContactService } from 'src/app/shared/services/list-contact.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contacts: Contact[] = []
  contact!: Contact;

  constructor(public listContactService: ListContactService,
              private activatedRoute: ActivatedRoute,
              private storage: StorageService,
              private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.contact = this.listContactService.getOneContact(id)
    })

    this.getContacts()
  }

  // this functions get all contacts
  getContacts(){
    this.listContactService.getContacts.subscribe(contacts => {
      this.contacts = contacts
    })
  }

  showModal(){
    this.listContactService.showModal = true;
  }

  // this function calls the deleteContact function in ListContactService
  delete(id: number){
    this.listContactService.deleteContact(id);
    console.log(this.contacts);
    this.storage.setContacts(this.contacts)
    this.router.navigate(['/'])
  }

  back(){
    this.router.navigate(['/'])
  }
}
