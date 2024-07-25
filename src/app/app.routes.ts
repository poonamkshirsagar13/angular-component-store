import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CartComponent } from './components/common/cart/cart.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

export const routes: Routes = [
  {path:'',component:DashBoardComponent,pathMatch:'full'},
  {path:'home',component:DashBoardComponent,pathMatch:'full'},
  {path:'cart',component:CartComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
