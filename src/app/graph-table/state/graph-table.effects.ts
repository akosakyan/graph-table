import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, of, mergeMap } from 'rxjs';

import { IGraphNode, IGraphLink } from '../models';
import { UserDataAccessService } from '../data-access';

import * as GraphTableActions from './graph-table.actions';

@Injectable()
export class GraphTableEffects {

  readonly loadGraphTableData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GraphTableActions.loadGraphTableData),
      switchMap(() =>
        this.userDataAccessService.getUsersDataGraph().pipe(
          map((data) => GraphTableActions.loadGraphTableDataSuccess({ data })),
          catchError((error) => of(GraphTableActions.loadGraphTableDataFailure({ error })))
        )
      )
    )
  );

  readonly loadGraphTableDataSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GraphTableActions.loadGraphTableDataSuccess),
      map(({ data }) => {
        return data.reduce((acc, item) => {
          if (item.type === 'user_node')
            acc.nodes.push(item);

          if (item.type === 'user_to_user_link')
            acc.links.push(item);

          return acc;
        }, { nodes: [] as IGraphNode[], links: [] as IGraphLink[] });
      }),
      mergeMap(({ nodes, links }) => [
        GraphTableActions.setGraphNodes({ nodes }),
        GraphTableActions.setGraphLinks({ links }),
      ])
    )
  );

  constructor(
    private actions$: Actions,
    private userDataAccessService: UserDataAccessService
  ) {}

}
