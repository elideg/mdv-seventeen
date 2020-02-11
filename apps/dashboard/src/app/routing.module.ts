import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WildComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'items', component: },
  { path: '404', component: WildComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
