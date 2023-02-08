import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-astronomie',
  templateUrl: './astronomie.component.html',
  styleUrls: ['./astronomie.component.css']
})
export class AstronomieComponent implements OnInit  {

  astronomies :any = [];

  constructor(){}

  ngOnInit(): void {
   this.getInfoAstronomie();
    
  }
  
  getInfoAstronomie(){
    //console.log("hhhhhhhhhhh")
    axios.get("https://go-apod.herokuapp.com/apod")
    .then(res =>{
      console.log(res.data)
      this.astronomies = res.data;
    })

    .catch(err=>{
      console.log(err)
    })
  }


}
