import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';

import { LoginComponent } from './components/login/login.component';
import { PlansComponent } from './components/plans/plans.component';
import { DongleComponent } from './components/dongle/dongle.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PostpaidComponent } from './components/postpaid/postpaid.component';
import { PrepaidComponent } from './components/prepaid/prepaid.component';
import { RechargeComponent } from './components/recharge/recharge.component';
import { VoizfonicaComponent } from './components/voizfonica/voizfonica.component';
import { BilldetailsComponent } from './components/billdetails/billdetails.component';
import { BillslistComponent } from './components/billslist/billslist.component';
import { TrackComponent } from './components/track/track.component';
import { TracklistComponent } from './components/tracklist/tracklist.component';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule  } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';
import { RegistrationserviceService } from './registrationservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
         AboutComponent,
         
         LoginComponent,
         PlansComponent,
         DongleComponent,
         SignUpComponent,
         PostpaidComponent,
         PrepaidComponent,
         RechargeComponent,
         VoizfonicaComponent,
         BilldetailsComponent,
         BillslistComponent,
         TrackComponent,
         TracklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
