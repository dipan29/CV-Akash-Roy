import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AkashComponent } from './akash/akash.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AkashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
