import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridsystemComponent } from './lecture/gridsystem/gridsystem.component';
import { JumpbarComponent } from './jumpbar/jumpbar.component';
import { PositionComponent } from './lecture/position/position.component';
import { TableComponent } from './lecture/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    GridsystemComponent,
    JumpbarComponent,
    PositionComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
