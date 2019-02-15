import { Component } from '@angular/core';

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
export class AppComponent {}
