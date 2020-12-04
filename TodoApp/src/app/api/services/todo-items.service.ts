/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root',
})
export class TodoItemsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTodoItemsGet
   */
  static readonly ApiTodoItemsGetPath = '/api/TodoItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoItemsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<TodoItem>>> {

    const rb = new RequestBuilder(this.rootUrl, TodoItemsService.ApiTodoItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TodoItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoItemsGet$Plain(params?: {
  }): Observable<Array<TodoItem>> {

    return this.apiTodoItemsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TodoItem>>) => r.body as Array<TodoItem>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoItemsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<TodoItem>>> {

    const rb = new RequestBuilder(this.rootUrl, TodoItemsService.ApiTodoItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TodoItem>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoItemsGet$Json(params?: {
  }): Observable<Array<TodoItem>> {

    return this.apiTodoItemsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TodoItem>>) => r.body as Array<TodoItem>)
    );
  }

  /**
   * Path part for operation apiTodoItemsPost
   */
  static readonly ApiTodoItemsPostPath = '/api/TodoItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoItemsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoItemsPost$Plain$Response(params?: {
    body?: TodoItem
  }): Observable<StrictHttpResponse<TodoItem>> {

    const rb = new RequestBuilder(this.rootUrl, TodoItemsService.ApiTodoItemsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TodoItem>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoItemsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoItemsPost$Plain(params?: {
    body?: TodoItem
  }): Observable<TodoItem> {

    return this.apiTodoItemsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TodoItem>) => r.body as TodoItem)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoItemsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoItemsPost$Json$Response(params?: {
    body?: TodoItem
  }): Observable<StrictHttpResponse<TodoItem>> {

    const rb = new RequestBuilder(this.rootUrl, TodoItemsService.ApiTodoItemsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TodoItem>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoItemsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoItemsPost$Json(params?: {
    body?: TodoItem
  }): Observable<TodoItem> {

    return this.apiTodoItemsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<TodoItem>) => r.body as TodoItem)
    );
  }

  /**
   * Path part for operation apiTodoItemsIdGet
   */
  static readonly ApiTodoItemsIdGetPath = '/api/TodoItems/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoItemsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoItemsIdGet$Plain$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<TodoItem>> {

    const rb = new RequestBuilder(this.rootUrl, TodoItemsService.ApiTodoItemsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TodoItem>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoItemsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoItemsIdGet$Plain(params: {
    id: string;
  }): Observable<TodoItem> {

    return this.apiTodoItemsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TodoItem>) => r.body as TodoItem)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoItemsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoItemsIdGet$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<TodoItem>> {

    const rb = new RequestBuilder(this.rootUrl, TodoItemsService.ApiTodoItemsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TodoItem>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoItemsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoItemsIdGet$Json(params: {
    id: string;
  }): Observable<TodoItem> {

    return this.apiTodoItemsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<TodoItem>) => r.body as TodoItem)
    );
  }

  /**
   * Path part for operation apiTodoItemsIdPut
   */
  static readonly ApiTodoItemsIdPutPath = '/api/TodoItems/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoItemsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoItemsIdPut$Response(params: {
    id: string;
    body?: TodoItem
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TodoItemsService.ApiTodoItemsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoItemsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoItemsIdPut(params: {
    id: string;
    body?: TodoItem
  }): Observable<void> {

    return this.apiTodoItemsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiTodoItemsIdDelete
   */
  static readonly ApiTodoItemsIdDeletePath = '/api/TodoItems/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoItemsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoItemsIdDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TodoItemsService.ApiTodoItemsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoItemsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoItemsIdDelete(params: {
    id: string;
  }): Observable<void> {

    return this.apiTodoItemsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
