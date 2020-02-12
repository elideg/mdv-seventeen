import { ItemsFacade } from './items.facade';
import { NotifyService } from './../../../../core-data/src/lib/notify.service';
import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import * as itemsActions from './items.actions';
import { Item, ItemsService } from '@mdv-seventeen/core-data';
import { ItemsPartialState } from './items.reducer';

@Injectable()
export class ItemsEffects {
  loadItems$ = createEffect(() =>
    this.dataPersistence.fetch(itemsActions.loadItems, {
      run: (
        action: ReturnType<typeof itemsActions.loadItems>,
        state: ItemsPartialState
      ) => {
        return this.itemsService.all().pipe(
          map((items: Item[]) => itemsActions.itemsLoaded({ items }))
        );
      },
      onError: (action: ReturnType<typeof itemsActions.loadItems>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addItem$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(itemsActions.createItem, {
      run: (
        action: ReturnType<typeof itemsActions.createItem>,
        state: ItemsPartialState
      ) => {
        return this.itemsService.create(action.item).pipe(
          map((item: Item) => itemsActions.itemCreated({ item })),
          tap(() => this.notify.notify('Successfully added a Item'))
        );
      },
      onError: (action: ReturnType<typeof itemsActions.createItem>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updateItem$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(itemsActions.updateItem, {
      run: (
        action: ReturnType<typeof itemsActions.updateItem>,
        state: ItemsPartialState
      ) => {
        return this.itemsService.update(action.item).pipe(
          map((item: Item) => itemsActions.itemUpdated({ item })),
          tap(() => this.notify.notify('Successfully updated a Item'))
        );
      },
      onError: (action: ReturnType<typeof itemsActions.updateItem>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteItem$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(itemsActions.deleteItem, {
      run: (
        action: ReturnType<typeof itemsActions.deleteItem>,
        state: ItemsPartialState
      ) => {
        return this.itemsService.delete(action.item).pipe(
          map((item: Item) => itemsActions.itemDeleted({ item })),
          tap(() => this.notify.notify('Successfully deleted a Item')),
          tap(() => this.itemsFacade.loadItems())
        );
      },
      onError: (action: ReturnType<typeof itemsActions.deleteItem>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ItemsPartialState>,
    private itemsService: ItemsService,
    private notify: NotifyService,
    private itemsFacade: ItemsFacade
  ) {}
}
