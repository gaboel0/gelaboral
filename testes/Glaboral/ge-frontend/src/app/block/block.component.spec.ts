import { ComponentFixture, TestBed } from '@angular/core/testing';
import { windowToggle } from 'rxjs';

import { BlockComponent } from './block.component';

describe('BlockComponent', () => {
  let component: BlockComponent;
  let fixture: ComponentFixture<BlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

 


