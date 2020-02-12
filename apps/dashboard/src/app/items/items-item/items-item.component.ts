import { ItemsFacade } from './../../../../../../libs/core-state/src/lib/items/items.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '@mdv-seventeen/core-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv-seventeen-items-item',
  templateUrl: './items-item.component.html',
  styleUrls: ['./items-item.component.scss']
})
export class ItemsItemComponent implements OnInit {
  items$: Observable<Item>;

  constructor(
    private route: ActivatedRoute,
    private itemsFacade: ItemsFacade
  ) { }

  ngOnInit() {
    this.itemsFacade.loadItems();
    this.route.params.subscribe((param) => this.itemsFacade.selectItem(param['id']));
    this.items$ = this.itemsFacade.selectedItem$
  }

}
