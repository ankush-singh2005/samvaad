import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardeightComponent } from './postcardeight.component';

describe('PostcardeightComponent', () => {
  let component: PostcardeightComponent;
  let fixture: ComponentFixture<PostcardeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcardeightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostcardeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
