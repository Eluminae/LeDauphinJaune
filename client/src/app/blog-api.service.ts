import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogApiService {

	baseUrl: string;

	constructor(private http: Http) {
		this.baseUrl = 'http://localhost:1337';
	}

	fetchArticles(page: number): Observable<any> {
		var pageTemp = (page-1)*50;
		return this.http
			.get(`${this.baseUrl}/article?limit=50&skip=${pageTemp}`)
			.map(response => response.json())
		;
	}

}
