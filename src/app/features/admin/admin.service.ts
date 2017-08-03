import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Event } from '../events/data-model';

@Injectable()
export class AdminService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  saveEvent(event: Event) {
    this.angularFireDatabase.list('/events').push(event);
  }

  getEvent(key: string): any {
    return this.angularFireDatabase.object('/events/' + key);
  }
}
