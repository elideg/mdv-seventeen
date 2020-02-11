import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsItemComponent } from './items-item.component';

describe('ItemsItemComponent', () => {
  let component: ItemsItemComponent;
  let fixture: ComponentFixture<ItemsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
