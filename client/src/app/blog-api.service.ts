import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogApiService {

	baseUrl: string;

	constructor(private http: Http) {
		this.baseUrl = 'http://localhost:3000';
	}

	fetchArticles(page: number): Observable<any> {
		return this.http
			.get(`${this.baseUrl}/api/articles?page=${page}`)
			.map(response => response.json())
		;
	}

}
