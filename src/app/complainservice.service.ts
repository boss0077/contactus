import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplainserviceService {
  [x: string]: any;
  mobileNumber!:number;
  complaintDescription!:String;
  constructor() { }
}
