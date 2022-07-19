import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  [x: string]: any;
  mobileNumber!:number;
  complaintDescription!:String;
  constructor() { }
}
