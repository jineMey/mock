import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class IHttpService {

  private static METHOD_DELTE = 'DELETE';
  private static METHOD_POST = 'POST';
  private static METHOD_GET = 'GET';
  private static METHOD_PUT = 'PUT';

  constructor(private httpClient: HttpClient) {
  }

  request(url, params, type) {
    return this[type](url, params);
  }

  /**
   * 返回json 格式的obj 对象
   * @param url
   * @param body
   * @param urlSearchParams
   * @returns {Observable<{}>}
   */
  POST(url, body, urlSearchParams?: any): Observable<{}> {
    const options = {
      body: body ? body : null,
      headers: this.setHeaders(),
      params: urlSearchParams,
    };
    return this.httpClient.request(IHttpService.METHOD_POST, url, options);
  }

  /**
   * 返回一个obj 对象
   * @param url
   * @param urlSearchParams url 的查询参数
   * @returns {Observable<{}>}
   */
  GET(url, urlSearchParams?: any): Observable<{}> {
    const options = {
      headers: this.setHeaders(),
      params: urlSearchParams,
    };
    return this.httpClient.request(IHttpService.METHOD_GET, url, options);
  }
  
  /**
   * 返回一个obj 对象
   * @param url 
   * @param urlSearchParams 
   * @param body 
   */
  DELETE(url, urlSearchParams: any, body?: any): Observable<{}> {
    const options = {
      body: body,
      headers: this.setHeaders(),
      params: urlSearchParams,
    };
    return this.httpClient.request(IHttpService.METHOD_DELTE, url, options);
  }

  

  setHeaders() {
    let herders = {
      'content-type': 'application/json;charset=UTF-8'
    };
    return herders;
  }
}