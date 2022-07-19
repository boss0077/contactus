import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserComplaint } from 'src/app/user-complaint';
import { ComplaintService } from 'src/app/complaint.service';


@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  dataLayout : UserComplaint= new UserComplaint();
  tempVar: any;
  submitted:any;

  constructor(private complaintService:ComplaintService) { }

  complaintform = new FormGroup({
    mobileNumber: new FormControl('', [Validators.required]),
    complaintDescription: new FormControl('', [Validators.required]),
  });

  submitform(){
    console.log(this.complaintform.value);
    this.tempVar=this.complaintform.value;
    this.dataLayout.mobileNumber=this.tempVar.mobileNumber;
    this.dataLayout.complaintDescription=this.tempVar.complaintDescription;
    this.save();
    this.complaintform.reset();
    alert("Submitted successfully!!    Status Active");
  }

  save() {​                                   //Calls the REST API throgh the services
    this.complaintService['userComplaintService'](this.dataLayout)
    .subscribe((data: any)=>console.log(data), (error: any)=>console.log(error));
    this.dataLayout = new UserComplaint();
}

  ngOnInit(): void {
  }

}