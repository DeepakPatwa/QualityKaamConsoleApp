import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  fetchbyGetAPI(url:any) {
    return this._http.get(url)
      .pipe(map(res => res as any));
  }

  getUser(input: any, isMobileNo: Boolean){
    var url = "http://ec2-18-116-86-142.us-east-2.compute.amazonaws.com:3000/getUser?";

    if(isMobileNo === true){
      url=url+"mobileNo="+input;
    }
    else{
      url=url+"userId="+input;
    }
    return this.fetchbyGetAPI(url)
      .pipe(map(res => res));
  }
}
