import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardsixComponent } from './postcardsix.component';

describe('PostcardsixComponent', () => {
  let component: PostcardsixComponent;
  let fixture: ComponentFixture<PostcardsixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcardsixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostcardsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
