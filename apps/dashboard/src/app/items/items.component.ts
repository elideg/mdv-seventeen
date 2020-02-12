import { ItemsFacade } from './../../../../../libs/core-state/src/lib/items/items.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from '@mdv-seventeen/core-data';
import { FormGroup, FormGroupDirective, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdv-seventeen-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  form: FormGroup;
  selectedItem$: Observable<Item> = this.itemsFacade.selectedItem$;
  items$: Observable<Item[]> = this.itemsFacade.allItems$;

  constructor(
      private fb: FormBuilder,
      private itemsFacade: ItemsFacade
  ) { }

  ngOnInit() {
      this.initForm();
      this.itemsFacade.loadItems();
      this.selectItem({ id: null } as Item);
  }

  selectItem(item: Item) {
      this.form.patchValue(item);
      this.itemsFacade.selectItem(item.id);
  }

  cancel() {
      this.selectItem({ id: null } as Item);
      this.form.reset();
  }

  saveItem(formDirective: FormGroupDirective) {
      if (this.form.invalid) return;
      if (this.form.value.id) {
          this.itemsFacade.updateItem(this.form.value);
          this.selectItem({ id: null } as Item);
      } else {
          this.itemsFacade.createItem(this.form.value);
          this.selectItem({ id: null } as Item);
      }
  }

  deleteItem(item: Item) {
      this.itemsFacade.deleteItem(item);
  }

  initForm() {
      this.form = this.fb.group({
          id: [''],
          name: ['', Validators.compose([Validators.required])],
          description: ['', Validators.compose([Validators.required])],
      })
  }

}
