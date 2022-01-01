export interface IGraphNode {
  userId: number;
  name: string;
  type: 'user_node';
}

export interface IGraphLink {
  node1: number;
  node2: number;
  type: 'user_to_user_link';
}

export interface IGraphLinkViewModel {
  name1: string;
  name2: string;
  type: 'user_to_user_link';
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export interface ISort {
  direction: SortDirection | null;
  active: 'name1' | 'name2' | null;
}
