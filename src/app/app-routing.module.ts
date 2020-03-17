import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components

const routes: Routes = [
  { path: '', redirectTo: '/my-places', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
