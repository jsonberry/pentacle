import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ToastFacade } from './+state/toast.facade';
import { Observable, Subject } from 'rxjs';
import { ToastStatus } from '@pentacle/models';
import { SyntaxHighlighterService } from '@pentacle/services';
import * as actions from './+state/toast.action';
@Component({
  selector: 'pentacle-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit, OnDestroy, AfterViewInit {
  public isActive$: Observable<boolean> = this.toastFacade.isActive$;
  public status$: Observable<ToastStatus> = this.toastFacade.status$;
  public message$: Observable<string> = this.toastFacade.message$;

  public actionsExample: string = this.syntaxHighlighter
    .convertReservedHTMLEntities(`
      // toast/+state/taost.actions.ts
      // https://github.com/jsonberry/pentacle/blob/next/libs/examples/toast/src/lib/toast/%2Bstate/toast.action.ts
      
      import { Action } from '@ngrx/store';

      export enum ToastActionTypes {
        Pending = '[Toast] Show Pending',
        Success = '[Toast] Show Success',
        Failure = '[Toast] Show Failue',
        Hide = '[Toast] Hide',
      }

      export class PendingToast implements Action {
        readonly type = ToastActionTypes.Pending;
        constructor(public message: string) {}
      }

      export class SuccessToast implements Action {
        readonly type = ToastActionTypes.Success;
        constructor(public message: string) {}
      }

      export class FailureToast implements Action {
        readonly type = ToastActionTypes.Failure;
        constructor(public message: string) {}
      }

      export class HideToast implements Action {
        readonly type = ToastActionTypes.Hide;
      }

      export type ToastUnion = SuccessToast | FailureToast | HideToast | PendingToast;

      export const fromToastActions = {
        SuccessToast,
        FailureToast,
        HideToast,
        PendingToast,
      };
`);

  public reducerExample: string = this.syntaxHighlighter
    .convertReservedHTMLEntities(`
        // toast/+state/taost.reducer.ts
        //https://github.com/jsonberry/pentacle/blob/next/libs/examples/toast/src/lib/toast/%2Bstate/toast.reducer.ts

        import { ToastActionTypes, ToastUnion } from './toast.action';

        export enum ToastStatus {
          Info = 'info',
          Success = 'success',
          Danger = 'danger',
          Hide = 'hide',
        }
        
        export interface ToastState {
          message: string;
          status: ToastStatus;
        }
        
        export const initialState: ToastState = {
          message: undefined,
          status: ToastStatus.Hide,
        };
        
        export function toastReducer(
          state: ToastState = initialState,
          action: ToastUnion,
        ): ToastState {
          switch (action.type) {
            case ToastActionTypes.Pending: {
              return { message: action.message, status: ToastStatus.Info };
            }
            case ToastActionTypes.Success: {
              return { message: action.message, status: ToastStatus.Success };
            }
            case ToastActionTypes.Failure: {
              return { message: action.message, status: ToastStatus.Danger };
            }
            case ToastActionTypes.Hide: {
              return { message: undefined, status: ToastStatus.Hide };
            }
            default: {
              return state;
            }
          }
        }
  
`);

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private toastFacade: ToastFacade,
    private syntaxHighlighter: SyntaxHighlighterService,
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngAfterViewInit() {
    this.syntaxHighlighter.highlightAll();
  }

  public sendSuccessToast(): void {
    this.toastFacade.dispatchSuccess();
  }

  public sendFailureToast(): void {
    this.toastFacade.dispatchFail();
  }
}
