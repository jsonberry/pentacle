import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResourcesFilterPredicate } from '@pentacle/models';

@Component({
  selector: 'pentacle-resources-filter',
  template: `
    <clr-modal
      [(clrModalOpen)]="open"
      [clrModalSize]="'sm'"
      [clrModalClosable]="false"
    >
      <h3 class="modal-title">Refine by</h3>
      <div class="modal-body">
        <form [formGroup]="filter">
          <ng-container *ngIf="formats">
            <section formGroupName="formats">
              <clr-toggle-container>
                <label>Format</label>
                <clr-toggle-wrapper
                  *ngFor="
                    let format of (filterFormGroups.availableFormats | keyvalue)
                  "
                >
                  <input
                    type="checkbox"
                    [formControlName]="format.value.id"
                    [id]="format.value.id"
                    clrToggle
                  />
                  <label [for]="format.value.id">{{
                    format.value.title
                  }}</label>
                </clr-toggle-wrapper>
              </clr-toggle-container>
              <button
                class="btn btn-sm btn-link"
                (click)="resetControl('formats')"
              >
                Reset
              </button>
            </section>
          </ng-container>
          <ng-container *ngIf="topics">
            <section formGroupName="topics">
              <clr-toggle-container>
                <label>Topic</label>
                <clr-toggle-wrapper
                  *ngFor="
                    let topic of (filterFormGroups.availableTopics | keyvalue)
                  "
                >
                  <input
                    type="checkbox"
                    clrToggle
                    [formControlName]="topic.value.id"
                    [id]="topic.value.id"
                  />
                  <label [for]="topic.value.id">{{ topic.value.title }}</label>
                </clr-toggle-wrapper>
              </clr-toggle-container>
              <button
                class="btn btn-sm btn-link"
                (click)="resetControl('topics')"
              >
                Reset
              </button>
            </section>
          </ng-container>
          <ng-container *ngIf="difficulties">
            <section formGroupName="difficulties">
              <clr-toggle-container>
                <label>Difficulty</label>
                <clr-toggle-wrapper
                  *ngFor="
                    let difficulty of (filterFormGroups.availableDifficulties
                      | keyvalue
                      | pentacleResourcesFilterDifficultiesSort)
                  "
                >
                  <input
                    type="checkbox"
                    clrToggle
                    [formControlName]="difficulty.value.id"
                    [id]="difficulty.value.id"
                  />
                  <label [for]="difficulty.value.id">
                    {{ difficulty.value.title }}
                  </label>
                </clr-toggle-wrapper>
              </clr-toggle-container>
              <button
                class="btn btn-sm btn-link"
                (click)="resetControl('difficulties')"
              >
                Reset
              </button>
            </section>
          </ng-container>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" (click)="resetAll()">
          Reset All
        </button>
        <button type="button" class="btn btn-primary" (click)="applyFilters()">
          Apply
        </button>
      </div></clr-modal
    >
  `,
  styleUrls: ['./resources-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesFilterComponent implements OnChanges {
  @Input() open: boolean;
  @Input() filterFormGroups;
  @Output() filtersApplied: EventEmitter<
    ResourcesFilterPredicate
  > = new EventEmitter();
  filter: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

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

    if (!this.difficulties && this.filterFormGroups.groups.difficulties) {
      this.filter.addControl(
        'difficulties',
        this.fb.group(this.filterFormGroups.groups.difficulties),
      );
    }
  }

  resetAll() {
    this.filter.reset();
    this.applyFilters();
  }

  resetControl(id: string) {
    this.filter.get(id).reset();
  }

  applyFilters() {
    this.filtersApplied.emit(this.filter.value);
  }

  get formats() {
    return this.filter.get('formats') as FormGroup;
  }

  get topics() {
    return this.filter.get('topics') as FormGroup;
  }

  get difficulties() {
    return this.filter.get('difficulties') as FormGroup;
  }
}
