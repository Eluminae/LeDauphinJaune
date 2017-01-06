import { Routes, RouterModule } from '@angular/router';

import { ListArticleComponent } from './list-article/list-article.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {path: '', component: ListArticleComponent, data: {}},
  {path: 'article/:id', component: ArticleComponent, data: {}},
];

export const routing = RouterModule.forRoot(routes);