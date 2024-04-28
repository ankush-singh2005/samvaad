import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardfourComponent } from './postcardfour.component';

describe('PostcardfourComponent', () => {
  let component: PostcardfourComponent;
  let fixture: ComponentFixture<PostcardfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcardfourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostcardfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
