import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { TagComponent } from './tag/tag.component';
import { AuthorComponent } from './author/author.component';
import { ListAuthorComponent } from './list-author/list-author.component';
import { ListArticleComponent } from './list-article/list-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    TagComponent,
    AuthorComponent,
    ListAuthorComponent,
    ListArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
