import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardfiveComponent } from './postcardfive.component';

describe('PostcardfiveComponent', () => {
  let component: PostcardfiveComponent;
  let fixture: ComponentFixture<PostcardfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcardfiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostcardfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
