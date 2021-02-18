import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    {
      value:22,
      label:'Favorites'
    },
    {
      value:967,
      label:'Page Views'
    },
    {
      value:30,
      label:'Users'
    }
  ]

  items = [
    {
      image:'assets/image/couch.jpg',
      title:'Couch',
      description:'This  is fantastic couch to sit on.'
    },
    {
      image:'assets/image/dresser2.jpeg',
      title:'Dresser',
      description:'This  is fantastic dresser .'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
