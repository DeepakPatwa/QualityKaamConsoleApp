import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

const SCHEDULE_QUERY_TYPE = {

}

export interface User{
  
}

export interface QueryParam  {
  name: string,
  value: any
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _http: HttpClient) { }

  fetchbyGetAPI(url:any) {
    return this._http.get(url)
      .pipe(map(res => res as any));
  }

  putApiCall(url: any, pojo: any): Observable<any>{
    console.log("making put call for url: ", url)
    console.log("and pojo: ", pojo)
    return this._http.put<any>(url, pojo);
  }
}
