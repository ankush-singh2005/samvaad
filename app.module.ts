import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { PostcardtwoComponent } from './layouts/post-card/postcardtwo/postcardtwo.component';
import { PostcardthreeComponent } from './layouts/post-card/postcardthree/postcardthree.component';
import { PostcardfourComponent } from './layouts/post-card/postcardfour/postcardfour.component';
import { PostcardfiveComponent } from './layouts/post-card/postcardfive/postcardfive.component';
import { PostcardsixComponent } from './layouts/post-card/postcardsix/postcardsix.component';
import { PostcardsevenComponent } from './layouts/post-card/postcardseven/postcardseven.component';
import { PostcardeightComponent } from './layouts/post-card/postcardeight/postcardeight.component';
import { PostcardnineComponent } from './layouts/post-card/postcardnine/postcardnine.component';
import { PostcardtenComponent } from './layouts/post-card/postcardten/postcardten.component';
import { PostcardeleComponent } from './layouts/post-card/postcardele/postcardele.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CommentFormComponent,
    SubscriptionFormComponent,
    ContactUsComponent,
    TermsAndConditionComponent,
    SinglePostComponent,
    SingleCategoryComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    AboutUsComponent,
    PostCardComponent,
    PostcardtwoComponent,
    PostcardthreeComponent,
    PostcardfourComponent,
    PostcardfiveComponent,
    PostcardsixComponent,
    PostcardsevenComponent,
    PostcardeightComponent,
    PostcardnineComponent,
    PostcardtenComponent,
    PostcardeleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
