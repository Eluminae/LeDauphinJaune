import { Routes, RouterModule } from '@angular/router';

import { ListArticleComponent } from './list-article/list-article.component';

const routes: Routes = [
  {path: '', component: ListArticleComponent, data: {}},
];

export const routing = RouterModule.forRoot(routes);