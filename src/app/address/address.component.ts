import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  user: any;
  user1: any;

  userFC = new FormControl('');

  constructor(private addressService: AddressService) { 

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

}
