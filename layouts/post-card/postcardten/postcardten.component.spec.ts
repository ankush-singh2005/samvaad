import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardtenComponent } from './postcardten.component';

describe('PostcardtenComponent', () => {
  let component: PostcardtenComponent;
  let fixture: ComponentFixture<PostcardtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcardtenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostcardtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
