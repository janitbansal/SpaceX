import { Component, OnInit } from '@angular/core';
import { SpaceXService } from './service/space-x.service';
import { Observable } from 'rxjs';
import { program } from './model/spaceProgram.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private spaceXService:SpaceXService){

  }

  title = 'sapceX';
  years=["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"]
  programs=[];
  filterObj={
    year:'',
    launch:'',
    land:''
  };
  ngOnInit(){
    this.fetchAllSpaceXProgram(this.filterObj)
  }

  fetchAllSpaceXProgram(filter){
    this.spaceXService.fetchAllPrograms(filter).subscribe((data)=> {
      this.programs=data
      console.log(this.programs)
    })
  }

  onSelectFilter(value,type){
      if(this.filterObj[type]===value.toString()){
        this.filterObj[type]=""
      }else{
      this.filterObj[type] = value.toString()
      }
      this.fetchAllSpaceXProgram(this.filterObj);
  }
}
