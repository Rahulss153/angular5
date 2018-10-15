import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { DataService} from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private _dataservice:DataService) {
    this.route.params.subscribe(res=>console.log(res.id))
   }
   goal:any
  ngOnInit() {
    this._dataservice.goal.subscribe(res=>this.goal=res);
   
  }

  sendmeHome(){
    this.router.navigate([''])
  }
}
