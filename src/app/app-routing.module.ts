import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronomieComponent } from './pages/astronomie/astronomie.component';

const routes: Routes = [
  {
    path: "astronomie", component:AstronomieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
