import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserComplaintService {
  mobileNumber!:number;
    complaintDescription!:String;
    complaintNumber:any;
    status!:String;

  constructor() { }
}
