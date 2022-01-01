import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from './core';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'graph-table',
        loadChildren: () => import('./graph-table/graph-table.module')
            .then((m) => m.GraphTableModule)
      },
      { path: '', redirectTo: 'graph-table', pathMatch: 'full' },
      { path: '**', redirectTo: 'graph-table' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
