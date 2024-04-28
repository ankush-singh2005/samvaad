import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardnineComponent } from './postcardnine.component';

describe('PostcardnineComponent', () => {
  let component: PostcardnineComponent;
  let fixture: ComponentFixture<PostcardnineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcardnineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostcardnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
