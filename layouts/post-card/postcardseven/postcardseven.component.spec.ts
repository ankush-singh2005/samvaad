import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardsevenComponent } from './postcardseven.component';

describe('PostcardsevenComponent', () => {
  let component: PostcardsevenComponent;
  let fixture: ComponentFixture<PostcardsevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcardsevenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostcardsevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
