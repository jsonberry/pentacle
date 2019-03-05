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
  template: `
    <clr-main-container>
      <clr-header class="header-6">
        <div class="branding">
          <a routerLink="/" class="nav-link"
            ><span class="title">Pentacle</span></a
          >
        </div>
      </clr-header>
      <div class="content-container">
        <div class="content-area" #contentArea>
          <pentacle-pages-loading-progress></pentacle-pages-loading-progress>
          <div class="router-container"><router-outlet></router-outlet></div>
        </div>
        <clr-vertical-nav [clr-nav-level]="1">
          <a
            clrVerticalNavLink
            routerLink="/introduction"
            routerLinkActive="active"
            ><clr-icon clrVerticalNavIcon shape="map-marker"></clr-icon
            >Introduction</a
          >
          <a clrVerticalNavLink routerLink="/overview" routerLinkActive="active"
            ><clr-icon clrVerticalNavIcon shape="cloud"></clr-icon>Overview</a
          >
          <a
            clrVerticalNavLink
            routerLink="/blueprint"
            routerLinkActive="active"
            ><clr-icon clrVerticalNavIcon shape="map"></clr-icon>Blueprint</a
          >
          <clr-vertical-nav-group routerLinkActive="active">
            <clr-icon shape="flag" clrVerticalNavIcon></clr-icon>
            Principles
            <clr-vertical-nav-group-children>
              <a
                clrVerticalNavLink
                routerLink="/principles/declare-what-instead-of-how"
                routerLinkActive="active"
              >
                Declare What Instead of How
              </a>
              <a
                clrVerticalNavLink
                routerLink="/principles/restrict-each-module-to-one-purpose"
                routerLinkActive="active"
              >
                Restrict Each Module to One Purpose
              </a>
              <a
                clrVerticalNavLink
                routerLink="/principles/think-of-everything-as-a-stream"
                routerLinkActive="active"
              >
                Think of Everything as a Stream
              </a>
              <a
                clrVerticalNavLink
                routerLink="/principles/dont-store-what-you-can-derive"
                routerLinkActive="active"
              >
                Don't Store What You Can Derive
              </a>
              <a
                clrVerticalNavLink
                routerLink="/principles/flow-data-in-one-direction"
                routerLinkActive="active"
              >
                Flow Data in One Direction
              </a>
            </clr-vertical-nav-group-children>
          </clr-vertical-nav-group>

          <clr-vertical-nav-group routerLinkActive="active">
            <clr-icon shape="blocks-group" clrVerticalNavIcon></clr-icon>
            Modules
            <clr-vertical-nav-group-children>
              <a
                clrVerticalNavLink
                routerLink="/modules/store"
                routerLinkActive="active"
              >
                Store
              </a>
              <a
                clrVerticalNavLink
                routerLink="/modules/command"
                routerLinkActive="active"
              >
                Command
              </a>
              <a
                clrVerticalNavLink
                routerLink="/modules/query"
                routerLinkActive="active"
              >
                Query
              </a>
              <a
                clrVerticalNavLink
                routerLink="/modules/facade"
                routerLinkActive="active"
              >
                Facade
              </a>
              <a
                clrVerticalNavLink
                routerLink="/modules/proxy"
                routerLinkActive="active"
              >
                Proxy
              </a>
              <a
                clrVerticalNavLink
                routerLink="/modules/view"
                routerLinkActive="active"
              >
                View
              </a>
            </clr-vertical-nav-group-children>
          </clr-vertical-nav-group>

          <a
            clrVerticalNavLink
            routerLink="/resources"
            routerLinkActive="active"
            [queryParamsHandling]="'preserve'"
          >
            <clr-icon clrVerticalNavIcon shape="library"></clr-icon>Resources</a
          >
          <a clrVerticalNavLink routerLink="/examples" routerLinkActive="active"
            ><clr-icon clrVerticalNavIcon shape="flask"></clr-icon>Examples</a
          >
          <div class="nav-divider"></div>
          <a
            clrVerticalNavLink
            href="https://github.com/jsonberry/pentacle/issues/new?assignees=jsonberry&labels=bug&template=bug_report.md&title="
            target="_blank"
            ><clr-icon clrVerticalNavIcon shape="bug"></clr-icon>Report Bug</a
          >
          <a
            clrVerticalNavLink
            href="https://github.com/jsonberry/pentacle/issues/new?assignees=jsonberry&labels=content&template=content.md&title=Content+Issue"
            target="_blank"
            ><clr-icon clrVerticalNavIcon shape="pencil"></clr-icon>Content
            Feedback</a
          >
        </clr-vertical-nav>
      </div>
    </clr-main-container>
  `,
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
