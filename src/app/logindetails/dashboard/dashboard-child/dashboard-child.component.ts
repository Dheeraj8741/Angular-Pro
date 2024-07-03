import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.css']
})
export class DashboardChildComponent {

  @Input() res:any
  
  @Output() event1:any = new EventEmitter()
 
  public item=[
   {
     name:"React",
     fee:8000
   },
   {
    name: "Angular",
    fee: 2000
   }
  ]
 
  send1(){
 this.event1.emit(this.item)
  }
 }
