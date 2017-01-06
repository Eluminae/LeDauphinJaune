import { Routes, RouterModule } from '@angular/router';

import { ListArticleComponent } from './list-article/list-article.component';
import { ArticleComponent } from './article/article.component';
import { ListAuthorComponent } from './list-author/list-author.component';

const routes: Routes = [
  {path: '', component: ListArticleComponent, data: {}},
  {path: 'authors', component: ListAuthorComponent, data: {}},
  {path: 'article/:id', component: ArticleComponent, data: {}},
];

export const routing = RouterModule.forRoot(routes);
