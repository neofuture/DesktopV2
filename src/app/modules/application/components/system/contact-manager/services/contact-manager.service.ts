import {Injectable} from '@angular/core';
import {ApiService} from '../../../../services/api.service';
import {BehaviorSubject, Observable, Subscribable} from 'rxjs';
import {Md5} from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class ContactManagerService {


  // private recordObject = new BehaviorSubject({
  //   record: undefined,
  //   totalRecords: 0,
  //   id: undefined,
  //   recordType: undefined
  // });
  // record = this.recordObject.asObservable();

  private initDataObject = new BehaviorSubject({
    types: {id: 0, name: 'Please wait'},
    categories: {id: 0, name: 'Please wait'},
    groups: {id: 0, name: 'Please wait'},
    status: {id: 0, name: 'Please wait'}
  });
  initData = this.initDataObject.asObservable();

  constructor(
    private apiService: ApiService
  ) {
    this.init(1);
  }

  init(recordType): void {
    const requestBody = {
      recordType: parseInt(recordType, 10)
    };
    this.apiService.call('contactManager/init', 'post', requestBody).subscribe(data => {
      this.initDataObject.next(data);
    });
  }

  setRecord(record, recordType): Subscribable<any> {
    const type = typeof record.id === 'undefined' || record.id === null ? 'post' : 'put';
    record.recordType = parseInt(recordType, 10);
    const saveRecord = JSON.parse(JSON.stringify(record));
    const md5 = new Md5();
    saveRecord.password = md5.appendStr(saveRecord.password).end();
    return this.apiService.call('contactManager/setRecord', type, saveRecord);
  }

  getRecord(category, recordIndex, recordType): Observable<any> {
    const requestBody = {
      category,
      recordIndex,
      recordType: parseInt(recordType, 10)
    };
    return this.apiService.call('contactManager/getRecord', 'post', requestBody);
  }

  getSettings(): any {
    return this.apiService.call('contactManager/getSettings', 'post', null);
  }

  saveObject(requestBody): Subscribable<any> {
    const type = typeof requestBody.id === 'undefined' ? 'post' : 'put';
    return this.apiService.call('contactManager/saveObject', type, requestBody);
  }

  deleteObject(item, object): any{

    const requestBody = {
      id: item.id,
      object
    };

    return this.apiService.call('contactManager/deleteObject', 'delete', requestBody);
  }

  setObjectOrder(order: any[], object): any {
    const requestBody = {
      order,
      object
    };
    return this.apiService.call('contactManager/setObjectOrder', 'post', requestBody);
  }

  deleteRecord(object): any {
    const requestBody = {
      id: object.id
    };

    return this.apiService.call('contactManager/deleteRecord', 'post', requestBody);

  }

  realTimeResults(term, recordType): any {
    const requestBody = {
      term,
      recordType: parseInt(recordType, 10)
    };

    return this.apiService.call('contactManager/realTimeSearch', 'post', requestBody);
  }

  setDefault(id, object): any {
    const requestBody = {
      id,
      object
    };
    return this.apiService.call('contactManager/setDefault', 'post', requestBody);

  }
}
