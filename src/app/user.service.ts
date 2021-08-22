import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient, private sharedService: SharedService) { }

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

  updateUser(pojo: any){
    console.log("inside updateUser");
    console.log("pojo is: ", pojo)

    // removing null and not editfable fields 
    for (var ele in pojo){
      if(pojo[ele] == null || ele.includes("created")){
        delete pojo[ele];
      }
      else if((typeof pojo[ele] === 'string' || pojo[ele] instanceof String) && pojo[ele].includes(',')){
        pojo[ele] = pojo[ele].split(',').map((item: string) => item.trim());
      }
    }
    console.log("pojo after null removed is: ", pojo)

    //updateUser url
    var url = "http://ec2-18-116-86-142.us-east-2.compute.amazonaws.com:3000/updateUser";
    this.sharedService.putApiCall(url, pojo).subscribe( resp => console.log(resp) );
  }
}
