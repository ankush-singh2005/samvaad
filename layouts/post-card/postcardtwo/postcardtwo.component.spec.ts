import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardtwoComponent } from './postcardtwo.component';

describe('PostcardtwoComponent', () => {
  let component: PostcardtwoComponent;
  let fixture: ComponentFixture<PostcardtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcardtwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostcardtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
