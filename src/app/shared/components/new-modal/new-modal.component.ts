import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import { ListContactService } from '../../services/list-contact.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { Contact } from '../../interfaces/contact';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.scss']
})
export class NewModalComponent implements OnInit {

  @Input() title: string = '';
  @Input() contactRecived!: Contact;

  newForm!: FormGroup

  contacts: Contact[] = []

  constructor(private formBuilder: FormBuilder,
              private listContactService: ListContactService,
              private storage: StorageService,
              private router: Router,
  ){}

  ngOnInit(): void {
    this.listContactService.getContacts.subscribe(contacts => {
      this.contacts = contacts;
    })

    this.iniForm(this.contactRecived)
  }

  iniForm(contact: Contact){
    this.newForm = new FormGroup({
      name: new FormControl(contact?.name || '', [Validators.required, Validators.minLength(1)]),
      lastName: new FormControl(contact?.lastName || ''),
      company: new FormControl(contact?.company || ''),
      number: new FormControl(contact?.number || '', [Validators.required, 
        Validators.min(10), Validators.pattern('[0-9]+'), Validators.minLength(10), Validators.maxLength(12)]
      )
    })
  }

  submitContact(){
    if(this.contactRecived){
      console.log(this.contactRecived);
      this.contactRecived.lastName = this.newForm.get('lastName')?.value;
      this.contactRecived.name     = this.newForm.get('name')?.value;
      this.contactRecived.company  = this.newForm.get('company')?.value;
      this.contactRecived.number   = Number(this.newForm.get('number')?.value)

      this.listContactService.editContact(this.contactRecived, this.contactRecived.id);
      this.storage.setContacts(this.contacts)
      this.listContactService.showModal = false;
      return
    }
    const contact: Contact = {
      id: Math.floor(Math.random() * 150),
      name: this.newForm.get('name')?.value,
      lastName: this.newForm.get('lastName')?.value,
      company: this.newForm.get('company')?.value,
      number: Number(this.newForm.get('number')?.value)
    }
    console.log(contact);
    this.listContactService.createContact(contact);
    this.storage.setContacts(this.contacts);
    this.listContactService.showModal = false;
  }

  cancelModal(){
    this.listContactService.showModal = false;
  }

}
