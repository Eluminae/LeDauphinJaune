import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BlogApiService } from '../blog-api.service';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.scss']
})
export class ListAuthorComponent implements OnInit {
  pageSub: any;
  authors;
  pageNum: number;
  listStart: number;

  constructor(
    private _blogAPIService: BlogApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pageSub = this.route.params.subscribe(params => {
      this.pageNum = +params['page'] ? +params['page'] : 1;
      this._blogAPIService.fetchAuthors(this.pageNum)
      .subscribe(
        authors => this.authors = authors,
        error => console.log('Error fetching dishes'),
        () => this.listStart = ((this.pageNum - 1) * 30) + 1
      );
    });
  }
}
