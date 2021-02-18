import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {
      name:'john',
      age:30,
      job:'developer',
      employed:true,
    },
    {
      name:'rohan',
      age:32,
      job:'tester',
      employed:false
    },
    {
      name:'rohan',
      age:32,
      job:'tester',
      employed:true
    },
    {
      name:'rohan',
      age:32,
      job:'tester',
      employed:false
    },
  ]
  // based on key only display the data see full example
  headers = [
    {
      key:'employed',label:'Employed?'
    },
    {
    key:'name',label:'Name'
    },
    {
      key:'age',label:'Age'
    },
    {
      key:'job',label:'Job'
    }
]

  constructor() { }

  ngOnInit(): void {
  }

  

}
