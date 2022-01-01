import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GraphTableRoutingModule } from './graph-table-routing.module';
import { GraphTableContainerComponent, GraphTableComponent, GraphTableFiltersComponent } from './components';
import { graphTableFeature, GraphTableEffects } from './state';

@NgModule({
  declarations: [
    GraphTableContainerComponent,
    GraphTableFiltersComponent,
    GraphTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GraphTableRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatIconModule,
    StoreModule.forFeature(graphTableFeature),
    EffectsModule.forFeature([GraphTableEffects])
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: <MatFormFieldDefaultOptions>{ appearance: 'outline' }
    }
  ]
})
export class GraphTableModule { }
