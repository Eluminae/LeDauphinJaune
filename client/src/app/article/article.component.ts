import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BlogApiService } from '../blog-api.service';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article;

  pageSub: any;
  id: number;

  constructor(
  	private _blogAPIService: BlogApiService, 
	private route: ActivatedRoute
  	) {}

  ngOnInit() {
  		// If we are in case we need to show ONE article
  		if (this.id !== undefined) {
	  		this.pageSub = this.route.params.subscribe(params => {
  				this.id = +params['id'];
				this._blogAPIService.fetchArticle(this.id)
				.subscribe(
					article => this.article = article,
					error => console.log('Error fetching article'),
					() => this.id = this.article.id);
			});
  		}
  }

  ngOnChanges() {
  	
  }
}
