import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Item } from '@mdv-seventeen/core-data';

@Component({
  selector: 'mdv-seventeen-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss']
})
export class ItemsDetailsComponent implements OnInit {
  originalName;
  currentItem: Item

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set item(value) {
    if (value) this.originalName = value.name;
      this.currentItem = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(item: Item) {
    this.saved.emit(item);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
