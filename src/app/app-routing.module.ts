import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationMainComponent } from './_navigation/components/navigation-main/navigation-main.component';
import { PageNotFoundComponent } from './_navigation/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: "",
    component: NavigationMainComponent,
    children: [
      {
        path: "converter",
        loadChildren: () => import('../app/text-converter/text-converter.module').then(m => m.TextConverterModule)
      },
      {
        path: "",
        redirectTo: "/converter",
        pathMatch: "full"
      },
      {
        path: "**",
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
