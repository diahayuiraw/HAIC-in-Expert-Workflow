import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Screen1Component} from "./screen-1/screen-1.component";
import { GetFigmaComponent } from '../../components/get-figma/get-figma.component';

const routes: Routes = [
  {
    path:'',component:GetFigmaComponent
  },
  {
    path:'screen',component:Screen1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Screen1RoutingModule { }
