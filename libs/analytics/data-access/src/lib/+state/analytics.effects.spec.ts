import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { AnalyticsEffects } from './analytics.effects';
import { LoadAnalytics, AnalyticsLoaded } from './analytics.actions';

describe('AnalyticsEffects', () => {
  let actions: Observable<any>;
  let effects: AnalyticsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      providers: [
        AnalyticsEffects,
        DataPersistence,
        provideMockActions(() => actions),
      ],
    });

    effects = TestBed.get(AnalyticsEffects);
  });

  describe('loadAnalytics$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadAnalytics() });
      expect(effects.loadAnalytics$).toBeObservable(
        hot('-a-|', { a: new AnalyticsLoaded([]) }),
      );
    });
  });
});
