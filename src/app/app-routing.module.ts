import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBoardComponent } from './pages/detail-board/detail-board.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"", redirectTo:"board", pathMatch:"full"},
  {path:"board",component:HomeComponent},
  {path:"board/:id",component:DetailBoardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
