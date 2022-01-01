import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-graph-table-filters',
  template: `
      <mat-form-field>
          <mat-label>Search by user name</mat-label>
          <input matInput [formControl]="filterControl">
          <span *ngIf="filterControl.value" matSuffix (click)="onClearFilter($event)" [attr.aria-label]="'Clear filter'">
            <mat-icon>clear</mat-icon>
          </span>
      </mat-form-field>
  `,
  styles: [
    `
      :host {
        display: block;

        mat-form-field {
          width: 100%;

          span[matSuffix] {
            cursor: pointer;
          }
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphTableFiltersComponent implements OnInit {

  @Input() set filter(filter: string | null) {
    this.filterControl.setValue(filter || '', { emitEvent: false });
  }

  @Output() filterChange = new EventEmitter<string>();

  filterControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.filterControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((filterValue: string) => filterValue.trim().toLowerCase())
      )
      .subscribe(this.filterChange);
  }

  onClearFilter(event: MouseEvent): void {
    event.stopPropagation();
    this.filterControl.setValue('', { emitEvent: true });
  }

}
