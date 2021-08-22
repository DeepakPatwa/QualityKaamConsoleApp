import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QueryParam } from '../shared.service';
import { TicketService } from '../ticket.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { SharedConstants } from '../SharedConstants';

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

  constructor(private ticketService: TicketService, private dialog: MatDialog) { 

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

  onEdit(userId: any){
    console.log("edit clicked" + userId);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.data = {
      title: SharedConstants.TICKET_ENTITY_EDIT_TITLE,
      data : this.findUserByUserId(userId),
      entityName: SharedConstants.TICKET_ENTITY_NAME
    }
    this.dialog.open(EditFormComponent, dialogConfig);
  }

  findUserByUserId(userId: any){
   return this.dataList.find(element => element.id == userId)
  }

}
