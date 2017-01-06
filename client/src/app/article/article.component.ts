import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article;

  pageSub: any;
  articles;
  articleId: number;

  constructor(
  	private _blogAPIService: BlogApiService, 
	private route: ActivatedRoute
  	) { }

  ngOnInit() {
  		this.pageSub = this.route.params.subscribe(params => {
			this._blogAPIService.fetchArticle(this.articleId)
			.subscribe(
				articles => this.articles = articles,
				error => console.log('Error fetching article')
		});
  }
}
