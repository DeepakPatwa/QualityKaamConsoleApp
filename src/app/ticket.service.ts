import { Injectable } from '@angular/core';
import { QueryParam, SharedService } from './shared.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private sharedService: SharedService) { }

  getTickets(queryParam: QueryParam){
    var url = "http://ec2-18-116-86-142.us-east-2.compute.amazonaws.com:3000/getTicket?";

    url=url+ queryParam.name +"="+queryParam.value;
    return this.sharedService.fetchbyGetAPI(url)
      .pipe(map(res => res));
  }
}
