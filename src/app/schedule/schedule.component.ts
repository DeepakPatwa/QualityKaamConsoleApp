import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddressService } from '../address.service';
import { ScheduleService } from '../schedule.service';
import { QueryParam } from '../shared.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {


  user: any;
  user1: any;
  selected = 'userId';
  dataList: any[]=[];

  userFC = new FormControl('');

  constructor(private scheduleService: ScheduleService) { 

  this.user={}
  }

  ngOnInit(): void {
  }

  getSchedule(){
    console.log("userFC: "+ this.userFC.value)
    var queryParam: QueryParam = {name: this.selected, value: this.userFC.value};

    this.scheduleService.getSchedule(queryParam).subscribe(data => {
        this.dataList = data;
    });
  }


}
