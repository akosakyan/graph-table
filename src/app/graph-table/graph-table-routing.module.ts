import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraphTableContainerComponent } from './components';

const routes: Routes = [{
  path: '',
  component: GraphTableContainerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphTableRoutingModule { }
