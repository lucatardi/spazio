import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissileComponent } from './missile/missile.component';
import { ListaMissiliComponent } from './lista-missili/lista-missili.component';
import { MissileInfoComponent } from './missile-info/missile-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MissileComponent,
    ListaMissiliComponent,
    MissileInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
