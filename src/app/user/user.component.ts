import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // firstNameAutofilled: boolean;
  // lastNameAutofilled: boolean;
  user: any;
  user1: any;

  userFC = new FormControl('');

  constructor(private userService: UserService) { 

  this.user={}
  }

  ngOnInit(): void {
    // this.getUser();
  }

  getUser(){
    console.log("userFC: "+ this.userFC.value)
    var userInput = this.userFC.value;
    console.log(this.isNumber(userInput))
    this.userService.getUser(userInput, this.isNumber(userInput)).subscribe(data => {
      if( Array.isArray(data)){
        this.user = data[0]
      }
      else{
      this.user = data;
      }
    });
  }

  isNumber(n: any) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

}
