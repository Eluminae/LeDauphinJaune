import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { BlogApiService } from './blog-api.service';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { TagComponent } from './tag/tag.component';
import { AuthorComponent } from './author/author.component';
import { ListAuthorComponent } from './list-author/list-author.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UniqueArticleComponent } from './unique-article/unique-article.component';
import { ListTagComponent } from './list-tag/list-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    TagComponent,
    AuthorComponent,
    ListAuthorComponent,
    ListArticleComponent,
    HeaderComponent,
    FooterComponent,
    ListTagComponent
    UniqueArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [BlogApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
