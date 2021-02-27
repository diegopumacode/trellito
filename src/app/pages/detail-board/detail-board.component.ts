import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxModalService } from 'ngx-easy-modal';
import { ShowItemComponent } from 'src/app/components/show-item/show-item.component';
import { TrelloService } from 'src/app/services/trello.service';

@Component({
  selector: 'app-detail-board',
  templateUrl: './detail-board.component.html',
  styleUrls: ['./detail-board.component.scss']
})
export class DetailBoardComponent implements OnInit {

  board:any= {}

  formUser = new FormGroup({
    name: new FormControl("",[Validators.required,]),
    alias: new FormControl(),
  })

  constructor(private _trelloService:TrelloService,private _routerActive:ActivatedRoute,private modalService: NgxModalService) { }

  ngOnInit(): void {
    let id = this._routerActive.snapshot.params.id
    this.board = this._trelloService.trello.find(board=> board.id == id)
  }

  saveUser(){
    if (this.formUser.valid) {
      this.board.users.push(this.formUser.value)
      this.formUser.reset()  
    }else{
      alert("Llena los datos po favo")
    }
    
  }

  openModal(item:any){
    const params = item;
    this._trelloService.paramsModal = params
    this.modalService.create(ShowItemComponent, params).then((modal: any) => {
      modal.open();
    });
  }
}
