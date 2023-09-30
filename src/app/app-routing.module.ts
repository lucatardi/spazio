import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMissiliComponent } from './lista-missili/lista-missili.component';
import { MissileInfoComponent } from './missile-info/missile-info.component';

const routes: Routes = [
  { path: 'lista', component: ListaMissiliComponent },
  { path: 'missile/:id', component: MissileInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
