import { PageIds } from '@pentacle/models';
import { filter } from 'rxjs/operators';

export function onPageFilter(pageId: PageIds) {
  return source$ =>
    source$.pipe(filter((action: any) => pageId === action.page.id));
}
