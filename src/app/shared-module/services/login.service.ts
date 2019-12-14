import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public httpclient: HttpClient) {}
  baseUrl = environment.baseUrl;
  userModule :String = "/users"

  saveUser(body): Observable<any> {
    return  this.httpclient.post(this.baseUrl+this.userModule, body);
  }

  getUserByUserName(username : String){
    return this.httpclient.get(this.baseUrl+this.userModule+"?username="+username);
  }
}
