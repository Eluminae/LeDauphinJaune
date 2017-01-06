import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BlogApiService } from '../blog-api.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {
  pageSub: any;
  articles;
  category;
  pageNum: number;
  listStart: number;

  constructor(
    private _blogAPIService: BlogApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
        this.pageSub = this.route.params.subscribe(params => {
                this.pageNum = +params['page'] ? +params['page'] : 1;
                this.fetchArticles(params)
                .subscribe(
                    articles => this.articles = articles,
                    error => console.log('Error fetching articles'),
                    () => this.listStart = ((this.pageNum - 1) * 30) + 1);
        });
  }

  fetchArticles(params) {
    this.pageSub = this.route.data.subscribe(data => this.category = (data as any).category);

    if (this.category == "author") {
      return this._blogAPIService.fetchArticlesByAuthor(this.pageNum, params['id']);
    }

    if (this.category == "tag") {
      return this._blogAPIService.fetchArticlesByTag(this.pageNum, params['id']);
    }

    return this._blogAPIService.fetchArticles(this.pageNum);
  }
}
