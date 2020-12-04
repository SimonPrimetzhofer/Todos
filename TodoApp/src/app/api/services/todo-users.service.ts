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

import { TodoUser } from '../models/todo-user';

@Injectable({
  providedIn: 'root',
})
export class TodoUsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTodoUsersGet
   */
  static readonly ApiTodoUsersGetPath = '/api/TodoUsers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoUsersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoUsersGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<TodoUser>>> {

    const rb = new RequestBuilder(this.rootUrl, TodoUsersService.ApiTodoUsersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TodoUser>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoUsersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoUsersGet$Plain(params?: {
  }): Observable<Array<TodoUser>> {

    return this.apiTodoUsersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TodoUser>>) => r.body as Array<TodoUser>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoUsersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoUsersGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<TodoUser>>> {

    const rb = new RequestBuilder(this.rootUrl, TodoUsersService.ApiTodoUsersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TodoUser>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoUsersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoUsersGet$Json(params?: {
  }): Observable<Array<TodoUser>> {

    return this.apiTodoUsersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TodoUser>>) => r.body as Array<TodoUser>)
    );
  }

  /**
   * Path part for operation apiTodoUsersPost
   */
  static readonly ApiTodoUsersPostPath = '/api/TodoUsers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoUsersPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoUsersPost$Plain$Response(params?: {
    body?: TodoUser
  }): Observable<StrictHttpResponse<TodoUser>> {

    const rb = new RequestBuilder(this.rootUrl, TodoUsersService.ApiTodoUsersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TodoUser>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoUsersPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoUsersPost$Plain(params?: {
    body?: TodoUser
  }): Observable<TodoUser> {

    return this.apiTodoUsersPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TodoUser>) => r.body as TodoUser)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoUsersPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoUsersPost$Json$Response(params?: {
    body?: TodoUser
  }): Observable<StrictHttpResponse<TodoUser>> {

    const rb = new RequestBuilder(this.rootUrl, TodoUsersService.ApiTodoUsersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TodoUser>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoUsersPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoUsersPost$Json(params?: {
    body?: TodoUser
  }): Observable<TodoUser> {

    return this.apiTodoUsersPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<TodoUser>) => r.body as TodoUser)
    );
  }

  /**
   * Path part for operation apiTodoUsersIdGet
   */
  static readonly ApiTodoUsersIdGetPath = '/api/TodoUsers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoUsersIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoUsersIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<TodoUser>> {

    const rb = new RequestBuilder(this.rootUrl, TodoUsersService.ApiTodoUsersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TodoUser>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoUsersIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoUsersIdGet$Plain(params: {
    id: number;
  }): Observable<TodoUser> {

    return this.apiTodoUsersIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TodoUser>) => r.body as TodoUser)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoUsersIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoUsersIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<TodoUser>> {

    const rb = new RequestBuilder(this.rootUrl, TodoUsersService.ApiTodoUsersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TodoUser>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiTodoUsersIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoUsersIdGet$Json(params: {
    id: number;
  }): Observable<TodoUser> {

    return this.apiTodoUsersIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<TodoUser>) => r.body as TodoUser)
    );
  }

  /**
   * Path part for operation apiTodoUsersIdPut
   */
  static readonly ApiTodoUsersIdPutPath = '/api/TodoUsers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoUsersIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoUsersIdPut$Response(params: {
    id: number;
    body?: TodoUser
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TodoUsersService.ApiTodoUsersIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiTodoUsersIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTodoUsersIdPut(params: {
    id: number;
    body?: TodoUser
  }): Observable<void> {

    return this.apiTodoUsersIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiTodoUsersIdDelete
   */
  static readonly ApiTodoUsersIdDeletePath = '/api/TodoUsers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTodoUsersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoUsersIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TodoUsersService.ApiTodoUsersIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiTodoUsersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTodoUsersIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiTodoUsersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
