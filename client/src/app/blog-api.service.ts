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
		var pageTemp = (page-1)*30;
		return this.http
			.get(`${this.baseUrl}/article?limit=30&skip=${pageTemp}`)
			.map(response => response.json())
		;
	}

	fetchArticlesByTag(page: number, tagId: string): Observable<any> {
		var pageTemp = (page-1)*30;
		return this.http
			.get(`${this.baseUrl}/tag/${tagId}/articles?limit=30&skip=${pageTemp}`)
			.map(response => response.json())
		;
	}

	fetchArticlesByAuthor(page: number, authorId: string): Observable<any> {
		var pageTemp = (page-1)*30;
		return this.http
			.get(`${this.baseUrl}/author/${authorId}/articles?limit=30&skip=${pageTemp}`)
			.map(response => response.json())
		;
	}

	fetchArticle(id: number): Observable<any> {
		return this.http
			.get(`${this.baseUrl}/article/${id}`)
			.map(response => response.json())
		;
	}

	fetchAuthors(page: number): Observable<any> {
		var pageTemp = (page-1)*30;
		return this.http
			.get(`${this.baseUrl}/author?limit=30&skip=${pageTemp}`)
			.map(response => response.json())
		;
	}

	fetchAuthor(id: number): Observable<any> {
		return this.http
			.get(`${this.baseUrl}/author/${id}`)
			.map(response => response.json())
		;
	}

	fetchTags(page: number): Observable<any> {
		var pageTemp = (page-1)*50;
		return this.http
		.get(`${this.baseUrl}/tag?limit=50&skip=${pageTemp}`)
		.map(response => response.json())
		;
	}
}
