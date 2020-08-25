import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/application/application.module').then(m => m.ApplicationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    // , { useHash: true }  <==- for Electron refresh to work
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
