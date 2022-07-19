import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  id!: number;
    name!: string;
    email!: string;
    password!: string;


  constructor() { }
}
