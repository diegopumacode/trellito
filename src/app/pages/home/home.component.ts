import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TrelloService } from 'src/app/services/trello.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Hola mundo';
  trello:any[] = []

  constructor(private _router: Router,private _trelloService:TrelloService) { }

  ngOnInit() {
    this.trello = this._trelloService.trello
  }

  viewBoard(id: Number) {
    // /board/id
    this._router.navigate(['/board', id])
  }

}
