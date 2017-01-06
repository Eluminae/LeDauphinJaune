import { Routes, RouterModule } from '@angular/router';

import { ListArticleComponent } from './list-article/list-article.component';
import { ArticleComponent } from './article/article.component';
import { ListAuthorComponent } from './list-author/list-author.component';
import { AuthorComponent } from './author/author.component';
import { UniqueArticleComponent } from './unique-article/unique-article.component';
import { ListTagComponent } from './list-tag/list-tag.component';

const routes: Routes = [
  {path: '', redirectTo: 'articles', pathMatch : 'full'},
  {path: 'authors', component: ListAuthorComponent, data: {}},
  {path: 'author/:id', component: ListArticleComponent, data: {category: 'author'}},
  {path: 'tag/:id', component: ListArticleComponent, data: {category: 'tag'}},
  {path: 'article/:id', component: UniqueArticleComponent, data: {}},
  {path: 'articles', component: ListArticleComponent, data: {}},
  {path: 'tags', component: ListTagComponent, data: {}},
];

export const routing = RouterModule.forRoot(routes);
