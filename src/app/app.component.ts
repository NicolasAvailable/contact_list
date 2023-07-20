import { Component } from '@angular/core';
import { StorageService } from './shared/services/storage.service';
import { ListContactService } from './shared/services/list-contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private storage: StorageService,
              private listContacts: ListContactService){
                this.listContacts.setContacts = storage.getContacts
              }
}
