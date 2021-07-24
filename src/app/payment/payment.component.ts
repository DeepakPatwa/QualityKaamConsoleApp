import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PaymentService } from '../payment.service';
import { QueryParam } from '../shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  user: any;
  user1: any;
  selected = 'userId';
  dataList: any[]=[
    {}
  ];

  userFC = new FormControl('');

  constructor(private paymentService: PaymentService) { 

  this.user={}
  }

  ngOnInit(): void {
  }

  getPaytemts(){
    console.log("userFC: "+ this.userFC.value)
    var queryParam: QueryParam = {name: this.selected, value: this.userFC.value};

    this.paymentService.getPaytemts(queryParam).subscribe(data => {
        this.dataList = data;
    });
  }

}
