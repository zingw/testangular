import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GridsystemComponent} from "./lecture/gridsystem/gridsystem.component";
import {PositionComponent} from "./lecture/position/position.component";
import {TableComponent} from "./lecture/table/table.component";

const routes: Routes = [
  {path : 'grid', component : GridsystemComponent},
  {path : 'position', component : PositionComponent},
  {path : 'table', component : TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
