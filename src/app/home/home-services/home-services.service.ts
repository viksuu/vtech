import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HomeServicesService {
  constructor(public httpclient: HttpClient) {}

  baseUrl = environment.baseUrl;

  userModule: String = "/users";

  loggedInUserId = 0;

  signInUserId = new BehaviorSubject(this.loggedInUserId);

  getLoggedinUserId() {
    return this.signInUserId;
  }

  setLoggedinUserId(id: number) {
    this.signInUserId.next(id);
  }

  getUserById(id: number) {
    return this.httpclient.get(this.baseUrl + this.userModule + "/" + id);
  }
}
