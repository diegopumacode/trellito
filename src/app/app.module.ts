import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailBoardComponent } from './pages/detail-board/detail-board.component';
import { TrelloService } from './services/trello.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxModalModule } from 'ngx-easy-modal';
import { ShowItemComponent } from './components/show-item/show-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailBoardComponent,
    ShowItemComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
