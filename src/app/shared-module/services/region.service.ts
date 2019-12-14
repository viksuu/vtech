import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { switchMap, debounceTime } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RegionService {
  constructor(public httpclient: HttpClient) {}
  baseUrl = environment.baseUrl;
  regionModule: String = "/regions";
  asyncModule: String = "/async";

  addRegion(body): Observable<any>  {
    return this.httpclient.post(this.baseUrl + this.regionModule, body);
  }

  addAsync(body) : Observable<any> {
    return this.httpclient.post(this.baseUrl + this.asyncModule, body);
  }

  getAsync() : Observable<any> {
    return this.httpclient.get(this.baseUrl + this.asyncModule);
  }

  searchRegion(searchText): Observable<any> {
    return this.httpclient.get(
      this.baseUrl + this.regionModule + "?regionShortName_like=" + searchText
    );
  }
}
