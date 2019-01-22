import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pentacleResourcesFilterDifficultiesSort' })
export class ResourcesFilterDifficultiesSortPipe implements PipeTransform {
  transform(
    availableDifficulties: {
      key: string;
      value: { id: string; title: string; rank: number };
    }[],
  ) {
    return availableDifficulties.sort((a, b) => a.value.rank - b.value.rank);
  }
}
