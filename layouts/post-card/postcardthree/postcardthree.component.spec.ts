import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardthreeComponent } from './postcardthree.component';

describe('PostcardthreeComponent', () => {
  let component: PostcardthreeComponent;
  let fixture: ComponentFixture<PostcardthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcardthreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostcardthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
