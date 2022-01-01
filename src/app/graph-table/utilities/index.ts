import { IGraphLink, IGraphNode, IGraphLinkViewModel, ISort, SortDirection } from '../models';

export function createGraphTableViewData(
  links: IGraphLink[],
  nodeEntityMap: { [userId: number]: IGraphNode }
): IGraphLinkViewModel[] {
  return links.map((link) => ({
    name1: nodeEntityMap[link.node1].name,
    name2: nodeEntityMap[link.node2].name,
    type: link.type,
  }));
}

export function filterGraphTableViewData(
  data: IGraphLinkViewModel[],
  filter: string
): IGraphLinkViewModel[] {
  if (!filter) return data;

  return data.filter(({ name1, name2 }) =>
    name1.toLowerCase().includes(filter.toLowerCase()) ||
    name2.toLowerCase().includes(filter.toLowerCase())
  );
}

export function sortGraphTableViewData(
  data: IGraphLinkViewModel[],
  { direction, active }: ISort
): IGraphLinkViewModel[] {
  return [...data].sort((a, b) => {
    const valueA = a[active];
    const valueB = b[active];

    let comparatorResult = 0;

    if (valueA != null && valueB != null) {
      // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
      if (valueA > valueB) {
        comparatorResult = 1;
      } else if (valueA < valueB) {
        comparatorResult = -1;
      }
    } else if (valueA != null) {
      comparatorResult = 1;
    } else if (valueB != null) {
      comparatorResult = -1;
    }

    return comparatorResult * (direction === SortDirection.ASC ? 1 : -1);
  });
}
