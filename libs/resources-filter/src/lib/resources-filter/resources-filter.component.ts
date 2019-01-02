import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResourcesFilterPredicate } from '@pentacle/models';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'pentacle-resources-filter',
  templateUrl: './resources-filter.component.html',
  styleUrls: ['./resources-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesFilterComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public filterFormGroups;
  @Output()
  public filterPredicate: EventEmitter<
    ResourcesFilterPredicate
  > = new EventEmitter();
  filter: FormGroup = this.fb.group({});
  ngOnDestroy$ = new Subject();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filter.valueChanges
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe(predicate => {
        this.filterPredicate.emit(predicate);
      });
  }

  ngOnChanges() {
    if (!this.formats && this.filterFormGroups.groups.formats) {
      this.filter.addControl(
        'formats',
        this.fb.group(this.filterFormGroups.groups.formats),
      );
    }

    // topics come through asynchronously
    // they aren't always available on the first tick, or Init
    // this sets the control once it becomes available
    if (!this.topics && this.filterFormGroups.groups.topics) {
      this.filter.addControl(
        'topics',
        this.fb.group(this.filterFormGroups.groups.topics),
      );
    }
  }

  ngOnDestroy() {
    this.ngOnDestroy$.next();
    this.ngOnDestroy$.complete();
  }

  resetAll() {
    this.filter.reset();
  }

  resetControl(id: string) {
    this.filter.get(id).reset();
  }

  get formats() {
    return this.filter.get('formats') as FormGroup;
  }

  get topics() {
    return this.filter.get('topics') as FormGroup;
  }
}
