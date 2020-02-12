import { ItemsItemComponent } from './items/items-item/items-item.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from '@mdv-seventeen/ui-lib';
import { WildComponent } from '@mdv-seventeen/ui-lib';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'items', children: [
    { path: '', component: ItemsComponent },
    { path: ':id', component: ItemsItemComponent }
  ] },
  { path: '404', component: WildComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
