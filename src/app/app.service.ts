import { Injectable } from '@angular/core';
import { IHttpService } from '../common/httpService';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private iHttpService: IHttpService) { }
  
  /**
   * 获取列表
   */
  getMember(params) {
    const url = `${environment.EASY_MOCK}/api/v1/auth/up/lawyer`;
    return this.iHttpService.request(url, params, 'GET');
  }
  
  /**
   * 新增成员
   * @param params 
   */
  addMember(params) {
    const url = `${environment.EASY_MOCK}/ilaw/api/v1/auth/up/create`;
    return this.iHttpService.request(url, params, 'POST');
  }
  
  /**
   * 删除成员
   */
  deleteMember() {
    const url = `${environment.EASY_MOCK}/ilaw/api/v1/auth/up/create`;
    return this.iHttpService.request(url, {}, 'POST');
  }
  
  // 获取例子
  getExample() {
    const url = `${environment.EASY_MOCK}/example`;
    return this.iHttpService.request(url, {}, 'GET');
  }
  
}
