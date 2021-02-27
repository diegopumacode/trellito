import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxModal } from 'ngx-easy-modal';
import { TrelloService } from 'src/app/services/trello.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent implements OnInit {
  // Modal
  modal: any;
  paramValue:any;
  destroy = true;
  formComment:any
  formCard:any
  
  
  params:any
  constructor(private __trelloService:TrelloService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.params = this.__trelloService.paramsModal
  
    this.formCard = this.formBuilder.group({
      'name':[this.params.name ,Validators.required],
      'description':[this.params.description ,Validators.required]    
    })
    
    this.formComment = this.formBuilder.group({
      'comment':["" ,Validators.required],
      'name':["codeka",Validators.required],
      'alias':["CK",Validators.required],
    })
  }

  close() {
    this.modal.close();
    if (this.destroy) {
      this.modal.destroy();
    }
  }

  saveCard(){
    let {name,description} = this.formCard.value
    this.params.name = name
    this.params.description = description
  }

  saveComment(){
    this.params.comments.push(this.formComment.value)
    this.formComment.reset()
  }
}
