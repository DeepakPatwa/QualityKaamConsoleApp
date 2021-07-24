import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QueryParam } from '../shared.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  user: any;
  user1: any;
  selected = 'userId';
  dataList: any[]=[
    {}
  ];

  userFC = new FormControl('');

  constructor(private ticketService: TicketService) { 

  this.user={}
  }

  ngOnInit(): void {
  }

  getTickets(){
    console.log("userFC: "+ this.userFC.value)
    var queryParam: QueryParam = {name: this.selected, value: this.userFC.value};

    this.ticketService.getTickets(queryParam).subscribe(data => {
        this.dataList = data;
    });
  }

}
