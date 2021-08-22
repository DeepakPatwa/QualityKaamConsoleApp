import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddressService } from '../address.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { SharedConstants } from '../SharedConstants';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  user: any;
  user1: any;

  userFC = new FormControl('');

  constructor(private addressService: AddressService, private dialog: MatDialog) { 

  this.user={}
  }

  ngOnInit(): void {
  }

  getAddress(){
    console.log("userFC: "+ this.userFC.value)
    var userInput = this.userFC.value;
    console.log(this.isNumber(userInput))
    this.addressService.getAddress(userInput).subscribe(data => {
      if( Array.isArray(data)){
        this.user = data[0]
      }
      else{
      this.user = data;
      }
    });
  }

  isNumber(n: any) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

  onEdit(userId: any){
    console.log("edit clicked" + userId);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.data = {
      title: SharedConstants.ADDRESS_ENTITY_EDIT_TITLE,
      data : this.user,
      entityName: SharedConstants.ADDRESS_ENTITY_NAME
    }
    this.dialog.open(EditFormComponent, dialogConfig);
  }

}
