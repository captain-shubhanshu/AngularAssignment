import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  // users: User[] = [];
  users: User[] = [
    {
      name: 'Shubhanshu Singh',
      username: 'shubhanshu',
      email: 'ss@tmail.com',
    },
    {
      name: 'Ram Prakash Singh',
      username: 'singhram',
      email: 'rps@tmail.com',
    },
    {
      name: 'Arjun Rathore',
      username: 'rarjun',
      email: 'ar@tmail.com',
    },
    {
      name: 'Huma Qureshi',
      username: 'qureshihume',
      email: 'hq@tmail.com',
    },
    {
      name: 'Paritosh Jha',
      username: 'paritosh',
      email: 'pj@tmail.com',
    },
    {
      name: 'Deborah Joseph',
      username: 'deborah',
      email: 'dj@tmail.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleDeleteEvent() {}
}
