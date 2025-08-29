import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Screen1RoutingModule } from './screen-1-routing.module';
import { Screen1Component } from './screen-1/screen-1.component';
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    Screen1Component
  ],
  imports: [
    CommonModule,
    Screen1RoutingModule,ComponentsModule
  ]
})
export class Screen1Module { }
