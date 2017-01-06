import { Routes, RouterModule } from '@angular/router';

import { ListArticleComponent } from './list-article/list-article.component';
import { ArticleComponent } from './article/article.component';
import { ListAuthorComponent } from './list-author/list-author.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  {path: '', redirectTo: 'articles', pathMatch : 'full'},
  {path: 'authors', component: ListAuthorComponent, data: {}},
  {path: 'author/:id', component: ListArticleComponent, data: {authorId: 'id'}},
  {path: 'article/:id', component: ArticleComponent, data: {}},
  {path: 'articles', component: ListArticleComponent, data: {}},
];

export const routing = RouterModule.forRoot(routes);
