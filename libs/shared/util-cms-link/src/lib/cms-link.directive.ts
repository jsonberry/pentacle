import { Directive, HostListener } from '@angular/core';
import { RouterFacade } from '@pentacle/router-state';

@Directive({
  selector: '[pentacleCmsLink]',
})
export class CmsLinkDirective {
  constructor(private router: RouterFacade) {}

  @HostListener('click', ['$event'])
  onclick(event: Event) {
    if ((<HTMLAnchorElement>event.target).hasAttribute('data-cms-link')) {
      event.preventDefault();
      this.router.go({
        path: [(<HTMLAnchorElement>event.target).getAttribute('href')],
      });
    }
  }
}
