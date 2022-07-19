import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user : UserService): Observable<any>{
    return this._http.post<any>("http://localhost:8090/loginuser",user)

  }
  public registrationUserFromRemote(user : UserService): Observable<any>{
    return this._http.post<any>("http://localhost:8090/registeruser",user)

  }
}
