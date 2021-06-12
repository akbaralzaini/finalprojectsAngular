import { Component, OnInit } from '@angular/core';
import { BusesService } from "../../../_services/buses.service";


@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {
  content?: Array<any>;
  public buses : any = {};

  constructor(private busesService : BusesService) { 
    
  }

  ngOnInit(): void {
    this.buses = {};
    this.busesService.getAll().subscribe(
      data => {
        this.content = data;
      },
      err =>{
        this.content = JSON.parse(err.error).message;
      }
    )
  }

  public submit():void {
    if (this.validate()) {
      this.busesService.createBus(this.buses).subscribe(
        data =>{
          alert("data berhasil ditambahkan");
          this.ngOnInit();
        },
        err=>{
          this.content = JSON.parse(err.error).message;
        } 
      );
    }
    
  }

  public validate():boolean{
    let status: boolean= true;
    if (typeof(this.buses.code) === "undefined") {
      alert("code is balank");
      status = false;
      return false;
    }else if (typeof(this.buses.capacity) === "undefined") {
      alert("capacity is balank");
      status = false;
      return false;
    }else if (typeof(this.buses.make) === "undefined") {
      alert("make is balank");
      status = false;
      return false;
    }
    return status;
  }

}
