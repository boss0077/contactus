import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BilldetailsComponent } from './components/billdetails/billdetails.component';
import { BillslistComponent } from './components/billslist/billslist.component';
import { AboutComponent } from './components/about/about.component';
import { DongleComponent } from './components/dongle/dongle.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlansComponent } from './components/plans/plans.component';
import { PostpaidComponent } from './components/postpaid/postpaid.component';
import { PrepaidComponent } from './components/prepaid/prepaid.component';
import { RechargeComponent } from './components/recharge/recharge.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TrackComponent } from './components/track/track.component';
import { TracklistComponent } from './components/tracklist/tracklist.component';
import { VoizfonicaComponent } from './components/voizfonica/voizfonica.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },


  {path: 'home', component: HomeComponent },
  {path: 'track', component: TrackComponent },
   {path: 'sign-up', component: SignUpComponent },
   {path: 'about', component: AboutComponent },
   {path: 'plans', component: PlansComponent },
   {path: 'prepaid', component: PrepaidComponent },
   {path: 'postpaid', component: PostpaidComponent },
   {path: 'dongle', component: DongleComponent },
   {path: 'voizfonica', component: VoizfonicaComponent },
   {path: 'login', component: LoginComponent },
   {path: 'billdetails', component: BilldetailsComponent },
   {path: 'recharge', component: RechargeComponent },
   {path: 'tracklist', component: TracklistComponent },
   {path: 'billslist', component: BillslistComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
