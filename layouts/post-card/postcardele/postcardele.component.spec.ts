import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardeleComponent } from './postcardele.component';

describe('PostcardeleComponent', () => {
  let component: PostcardeleComponent;
  let fixture: ComponentFixture<PostcardeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcardeleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostcardeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
