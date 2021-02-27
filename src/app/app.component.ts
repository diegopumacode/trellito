import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Hola mundo';
  trello = [
    {
      id:1,
      name:"Titulo 1",
      users: [
        {name:"codeka", alias:"CA"},
        {name:"juanito", alias:"JU"}  
      ],
    },
    {
      id:2,
      name:"Titulo 2",
      users: [
        {name:"juanito", alias:"JU"}  
      ],
    }

  ]

  ngOnInit(){
    this.title = "Hola mundo 2"
  }

  viewBoard(id:Number){
    console.log(id)
  }

}
