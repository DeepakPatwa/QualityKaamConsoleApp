import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private _http: HttpClient) { }

  fetchbyGetAPI(url:any) {
    return this._http.get(url)
      .pipe(map(res => res as any));
  }

  getAddress(addressId: any){
    var url = "http://ec2-18-116-86-142.us-east-2.compute.amazonaws.com:3000/getAddress?";


      url=url+"addressId="+addressId;

    return this.fetchbyGetAPI(url)
      .pipe(map(res => res));
  }
}
