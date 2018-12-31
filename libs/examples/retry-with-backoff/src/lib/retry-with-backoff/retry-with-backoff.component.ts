import { Component, AfterViewInit } from '@angular/core';
import { SyntaxHighlighterService } from '@pentacle/services';

@Component({
  selector: 'pentacle-retry-with-backoff',
  templateUrl: './retry-with-backoff.component.html',
  styleUrls: ['./retry-with-backoff.component.scss'],
})
export class RetryWithBackoffComponent implements AfterViewInit {
  example = this.syntaxHighlighter
    .convertReservedHTMLEntities(`export const retryWithBackoff = ({
    fallback = console.warn,
    fallbackAction = null,
    errorPassthrough = true,
    retry = false,
    opts = {
      attempts: 9,
      strategy: 'exponential',
      timeout: 15000,
    },
  }: DataIntegrityCheck) => (stream$: any): Observable<any> =>
    stream$.pipe(
      retryWhen((errors$) =>
        errors$.pipe(
          timeout(opts.timeout || 15000),
          zip(range(1, (opts.attempts || 9) + 1)),
          mergeMap(([error, i]) => {
            if (!retry || (opts.attempts || 9) < i) {
              return throwError(error);
            }

            switch (opts.strategy || 'exponential') {
              case 'linear':
                return timer(i * 1000);

              case 'exponential':
                return timer(Math.pow(Math.E, i));
            }
          }),
        ),
      ),
      catchError((err) => {
        if (fallbackAction) {
          return of(
            errorPassthrough ? new fallbackAction(err) : new fallbackAction(),
          );
        }

        if (typeof fallback === 'function') {
          return of(errorPassthrough ? fallback(err) : fallback());
        }

        return of(fallback);
      }),
    );`);

  constructor(private syntaxHighlighter: SyntaxHighlighterService) {}

  ngAfterViewInit() {
    this.syntaxHighlighter.highlightAll();
  }
}
