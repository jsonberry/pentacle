import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { asyncScheduler } from 'rxjs';
import { filter, observeOn, scan } from 'rxjs/operators';

interface ScrollPositionRestore {
  positions: { [K: number]: number };
  trigger: 'imperative' | 'popstate' | 'hashchange';
  idToRestore: number;
  event: Event;
}

@Component({
  selector: 'pentacle-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .main-container .content-container .content-area {
        position: relative;
        padding-top: 18px;
        padding-left: 36px;
      }

      .router-container {
        max-width: 740px;
      }

      .clr-vertical-nav {
        width: 10rem;
      }

      @media (min-width: 768px) {
        .clr-vertical-nav {
          width: inherit;
        }
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  @ViewChild('contentArea') private contentArea: ElementRef<HTMLDivElement>;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(
          event =>
            event instanceof NavigationStart || event instanceof NavigationEnd,
        ),
        scan<Event, ScrollPositionRestore>((acc, event) => ({
          event,
          positions: {
            ...acc.positions,
            ...(event instanceof NavigationStart
              ? {
                  [event.id]: this.contentArea.nativeElement.scrollTop,
                }
              : {}),
          },
          trigger:
            event instanceof NavigationStart
              ? event.navigationTrigger
              : acc.trigger,
          idToRestore:
            (event instanceof NavigationStart &&
              event.restoredState &&
              event.restoredState.navigationId + 1) ||
            acc.idToRestore,
        })),
        filter(
          ({ event, trigger }) => event instanceof NavigationEnd && !!trigger,
        ),
        observeOn(asyncScheduler),
      )
      .subscribe(({ trigger, positions, idToRestore }) => {
        if (trigger === 'imperative') {
          this.contentArea.nativeElement.scrollTop = 0;
        }

        if (trigger === 'popstate') {
          this.contentArea.nativeElement.scrollTop = positions[idToRestore];
        }
      });
  }
}
