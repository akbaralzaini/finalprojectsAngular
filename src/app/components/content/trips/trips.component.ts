import { Component, OnInit } from '@angular/core';
import { TripsService } from "../../../_services/trips.service";
import { BusesService } from "../../../_services/buses.service";
import { StopService } from "../../../_services/stop.service";

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  public trips : any = {};
  content?: Array<any>;
  public bus : Array<any>;
  public stop : Array<any>;

  constructor(private tripService : TripsService,
    private busService: BusesService,
    private stopService: StopService) { }

  ngOnInit(): void {
    this.trips = {}
    this.tripService.getAll().subscribe(
      data => {
        this.content = data;
      },
      err =>{
        this.content = JSON.parse(err.error).message;
      }
    );
    
    this.busService.getAll().subscribe(
      data => {
        this.bus = data;
      },
      err =>{
        this.content = JSON.parse(err.error).message;
      }
    );

    this.stopService.getAll().subscribe(
      data => {
        this.stop = data;
      },
      err =>{
        this.content = JSON.parse(err.error).message;
      }
    );

  }

  public submit():void {
    if(this.validate()){
      this.tripService.createTrip(this.trips).subscribe(
        data =>{
          this.ngOnInit();
          alert("data berhasil ditambahkan");
        },
        err=>{
          alert("data gagal di tampilkan");
        } 
      );
    }
  }

  public validate():boolean{
    let status: boolean= true;
    if (typeof(this.trips.busId) === "undefined") {
      alert("BUS code is balank");
      status = false;
      return false;
    }else if (typeof(this.trips.sourceStopId) === "undefined") {
      alert("source Stop is balank");
      status = false;
      return false;
    }else if (typeof(this.trips.destStopId) === "undefined") {
      alert("Destination Stop is balank");
      status = false;
      return false;
    }else if (typeof(this.trips.journeyTime) === "undefined") {
      alert("Trip Duration is balank");
      status = false;
      return false;
    }else if (typeof(this.trips.fare) === "undefined") {
      alert("fare is balank");
      status = false;
      return false;
    }
    return status;
  }
}
