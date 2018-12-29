import { Component, OnInit } from '@angular/core';
import { ToastFacade } from './+state/toast.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'pentacle-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  isActive$: Observable<boolean> = this.toastFacade.isActive$;
  status$: Observable<string> = this.toastFacade.status$;
  constructor(private toastFacade: ToastFacade) {}

  ngOnInit() {}
}
