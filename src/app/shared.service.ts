import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const SCHEDULE_QUERY_TYPE = {

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
}
