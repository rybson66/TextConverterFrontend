import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConverterMainComponent } from './components/converter-main/converter-main.component';


const routes: Routes = [
  {
    path: "",
    component: ConverterMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextConverterRoutingModule { }
