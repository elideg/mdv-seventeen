import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Item } from '@mdv-seventeen/core-data';

@Component({
  selector: 'mdv-seventeen-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @Input() items: Item[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(item: Item) {
    this.selected.emit(item);
  }

  delete(item: Item) {
    this.deleted.emit(item);
  }
}
