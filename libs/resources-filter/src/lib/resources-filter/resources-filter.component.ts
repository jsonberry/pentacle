import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
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
          <ng-container *ngIf="bestOf">
            <section formGroupName="bestOf">
              <clr-toggle-container>
                <label>Best of</label>
                <clr-toggle-wrapper>
                  <input
                    type="checkbox"
                    clrToggle
                    [formControlName]="
                      filterFormGroups.availableBestOf.bestOf.id
                    "
                    [id]="filterFormGroups.availableBestOf.bestOf.id"
                  />
                  <label [for]="filterFormGroups.availableBestOf.bestOf.id">
                    {{ filterFormGroups.availableBestOf.bestOf.title }}
                  </label>
                </clr-toggle-wrapper>
              </clr-toggle-container>
              <button
                class="btn btn-sm btn-link"
                (click)="resetControl('bestOf')"
              >
                Reset
              </button>
            </section>
          </ng-container>

          <ng-container *ngIf="costs">
            <section formGroupName="costs">
              <clr-toggle-container>
                <label>Cost</label>
                <clr-toggle-wrapper
                  *ngFor="
                    let cost of (filterFormGroups.availableCosts | keyvalue)
                  "
                >
                  <input
                    type="checkbox"
                    clrToggle
                    [formControlName]="cost.value.id"
                    [id]="cost.value.id"
                  />
                  <label [for]="cost.value.id"> {{ cost.value.title }} </label>
                </clr-toggle-wrapper>
              </clr-toggle-container>
              <button
                class="btn btn-sm btn-link"
                (click)="resetControl('costs')"
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

          <hr />

          <ng-container *ngIf="topics">
            <section formGroupName="topics">
              <clr-toggle-container>
                <label>Topics</label>
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

            <section>
              <div class="btn-group">
                <div class="radio btn btn-sm">
                  <input
                    type="radio"
                    formControlName="topicsOperator"
                    value="exclusive"
                    id="topicsOperatorExclusive"
                    checked
                  />
                  <label for="topicsOperatorExclusive">exclusive</label>
                </div>
                <div class="radio btn btn-sm">
                  <input
                    type="radio"
                    formControlName="topicsOperator"
                    value="inclusive"
                    id="topicsOperatorInclusive"
                  />
                  <label for="topicsOperatorInclusive">inclusive</label>
                </div>
              </div>
              <span class="p7"
                >Exclusive shows resources that have all selected topics.
                Inclusive will show any resources for selected topics.</span
              >
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
export class ResourcesFilterComponent implements OnInit, OnChanges {
  @Input() open: boolean;
  @Input() filterFormGroups;
  @Output() filtersApplied: EventEmitter<
    ResourcesFilterPredicate
  > = new EventEmitter();
  filter: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnChanges() {
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

  ngOnInit() {
    this.filter.addControl(
      'bestOf',
      this.fb.group(this.filterFormGroups.groups.bestOf),
    );
    this.filter.addControl(
      'costs',
      this.fb.group(this.filterFormGroups.groups.costs),
    );
    this.filter.addControl(
      'difficulties',
      this.fb.group(this.filterFormGroups.groups.difficulties),
    );
    this.filter.addControl(
      'formats',
      this.fb.group(this.filterFormGroups.groups.formats),
    );
    this.filter.addControl(
      'topicsOperator',
      this.fb.control(this.filterFormGroups.groups.topicsOperator),
    );
  }

  resetAll() {
    this.filter.reset();
    this.resetTopicsOperator();
    this.applyFilters();
  }

  resetControl(id: string) {
    if (id === 'topics') {
      this.resetTopicsOperator();
    }

    this.filter.get(id).reset();
  }

  resetTopicsOperator() {
    this.filter.get('topicsOperator').setValue('exclusive');
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

  get bestOf() {
    return this.filter.get('bestOf') as FormGroup;
  }

  get costs() {
    return this.filter.get('costs') as FormGroup;
  }
}
