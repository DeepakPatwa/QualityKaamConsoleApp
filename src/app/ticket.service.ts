import { Injectable } from '@angular/core';
import { QueryParam, SharedService } from './shared.service';
import { map } from 'rxjs/operators';
import { SharedConstants } from './SharedConstants';

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

  updateTicket(pojo: any){
    console.log("inside updateTicket");
    console.log("pojo is: ", pojo)
    
    for (var ele in pojo){
      // removing null and not editfable fields 
      if(pojo[ele] == null || ele.includes("created")){
        delete pojo[ele];
      }// coverting to array
      else if((typeof pojo[ele] === 'string' || pojo[ele] instanceof String) && pojo[ele].includes(',')){
        pojo[ele] = pojo[ele].split(',').map((item: string) => item.trim());
      }
    }
    console.log("pojo after null removed is: ", pojo)

    //updateUser url
   
    this.sharedService.putApiCall(SharedConstants.TICKET_UPDATE_URL, pojo).subscribe( resp => console.log(resp) );
  }
}
