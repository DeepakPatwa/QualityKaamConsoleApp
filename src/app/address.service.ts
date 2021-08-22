import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SharedService } from './shared.service';
import { SharedConstants } from './SharedConstants';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private _http: HttpClient, private sharedService: SharedService) { }

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

  updateAddress(pojo: any){
    console.log("inside updateAddress");
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
    this.sharedService.putApiCall(SharedConstants.ADDRESS_UPDATE_URL, pojo).subscribe( resp => console.log(resp) );
  }
}
