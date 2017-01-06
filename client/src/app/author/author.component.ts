import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Input() author;

  pageSub: any;
  authorId: number;

  constructor() { }

  ngOnInit() { }
}

