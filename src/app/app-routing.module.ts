import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersPageComponent } from './Pages/owners-page/owners-page.component';

const routes: Routes = [
  {path: 'owners',  component: OwnersPageComponent},
  {path: '**', redirectTo: '/owners'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
