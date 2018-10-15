import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-home',  //Selectore ue to import template from other html or component
  templateUrl: './home.component.html',  //path html page for this component
  styleUrls: ['./home.component.scss'] //path for css for this componennt html template
})
export class HomeComponent implements OnInit {
  username :string ="RAhul"
  totaluser:number
  btnName:string="Submit data"
  txtValue: string="Goal running"
  constructor(private _dataservice:DataService) { }

  goal=[]
  ngOnInit() {
    this.totaluser=this.goal.length
    this._dataservice.goal.subscribe(res=>this.goal=res);
    this._dataservice.changeGoal(this.goal)
  }
  addItem(){
    this.goal.push(this.txtValue)
    this.txtValue=""
    this.totaluser=this.goal.length
    this._dataservice.changeGoal(this.goal)
  }

}
