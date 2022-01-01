import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IGraphNode, IGraphLink } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserDataAccessService {

  private readonly _data: Array<IGraphNode | IGraphLink> = [
    {
      userId: 1,
      name: "a",
      type: "user_node"
    },
    {
      type: "user_node",
      name: "b",
      userId: 2
    },
    {
      type: "user_node",
      name: "c",
      userId: 3
    },
    {
      type: "user_node",
      name: "d",
      userId: 4
    },
    {
      type: "user_to_user_link", // this means that the user with id 1 is linked to user with id 2
      node1: 1,
      node2: 2
    },
    {
      type: "user_to_user_link",
      node1: 2,
      node2: 3
    },
    {
      type: "user_to_user_link",
      node1: 3,
      node2: 4
    },
    {
      type: "user_to_user_link",
      node1: 4,
      node2: 1
    }
  ];

  constructor() { }

  // Simulated network latency
  getUsersDataGraph(): Observable<Array<IGraphNode | IGraphLink>> {
    return of(this._data).pipe(delay(500));
  }
}
