import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BlogApiService } from '../blog-api.service';

@Component({
  selector: 'app-list-tag',
  templateUrl: './list-tag.component.html',
  styleUrls: ['./list-tag.component.scss']
})
export class ListTagComponent implements OnInit {
  pageSub: any;
  tags;
  pageNum: number;
  listStart: number;

  constructor(
    private _blogAPIService: BlogApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pageSub = this.route.params.subscribe(params => {
      this.pageNum = +params['page'] ? +params['page'] : 1;
      this._blogAPIService.fetchTags(this.pageNum)
      .subscribe(
        tags => this.tags = tags,
          error => console.log('Error fetching dishes'),
          () => this.listStart = ((this.pageNum - 1) * 30) + 1
      );
    });
  }

}
