import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SharedConstants } from '../SharedConstants';
import { UserService } from '../user.service';
import { AddressService } from '../address.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  editFg: FormGroup= this.formBuilder.group({ }); 
  formControlsNames : any []=[];

  constructor(public dialogRef: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private formBuilder: FormBuilder,
    private userService: UserService,
    private addressService: AddressService,
    private ticketService: TicketService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.createFormGroup(this.data.data);
    console.log(this.editFg)
  }

  createFormGroup(data: any){
    for ( let key of Object.keys(data)){
  //     let mealName = meals[key];
  // // ... do something with mealName
  // console.log(mealName)
      this.editFg.addControl(key , this.formBuilder.control(''));
      this.formControlsNames.push(key);
      this.editFg.controls[key].setValue(data[key]);
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    console.log(this.editFg.value);
    console.log(this.formControlsNames)

    if(this.data.entityName === SharedConstants.USER_ENTITY_NAME){
      console.log("user submitted");
      this.userService.updateUser(this.editFg.value)
    }
    else if(this.data.entityName === SharedConstants.ADDRESS_ENTITY_NAME){
      console.log("Address submitted");
      this.addressService.updateAddress(this.editFg.value)
    }
    else if(this.data.entityName === SharedConstants.TICKET_ENTITY_NAME){
      console.log("Address submitted");
      this.ticketService.updateTicket(this.editFg.value)
    }
  }

}
