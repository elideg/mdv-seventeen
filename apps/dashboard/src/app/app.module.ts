import { UiLibModule } from './../../../../libs/ui-lib/src/lib/ui-lib.module';
import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { ItemsDetailsComponent } from './items/items-details/items-details.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsItemComponent } from './items/items-item/items-item.component';
import { ItemsComponent } from './items/items.component';
import { RoutingModule } from './routing.module';
import { CoreDataModule } from '@mdv-seventeen/core-data';
import { MaterialModule } from '@mdv-seventeen/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ItemsComponent, ItemsItemComponent, ItemsListComponent, ItemsDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
