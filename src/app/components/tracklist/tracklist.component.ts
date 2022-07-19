import { Component, OnInit } from '@angular/core';
import { UserComplaintService } from 'src/app/user-complaint.service';
import { ComplainserviceService } from 'src/app/complainservice.service';
@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {

  dataLayout : UserComplaintService= new UserComplaintService();
  // homedatas!: Observable<Homedata[]>;  
  localVar:any;

  constructor(private homeserviceService:ComplainserviceService) { }

  ngOnInit(): void {
    this.homeserviceService['getHomeList']().subscribe((data: any) =>{
      this.localVar =data;  // we are pulled data from backend to the UI inside TS file and taken on HTML file. 
      console.log(this.localVar);
      // this.dtTrigger.next()
      })
  }

}
