import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MpkkService {
  baseURL = 'http://yourapi.my/'; //insert your main url here
  contacts1: Array<any>;
  constructor(
    protected http: HttpClient
  ) { 
    this.contacts1 = [];
  }

  getAllContacts(){
    return new Promise((resolve, reject)=>{
      let url = this.baseURL + 'mobile/json/contacts_arr.php';
      this.http.get(url)
      .subscribe(res=>{
        let response: any = res;
        this.contacts1 = response;
        resolve(response);
      }, error => {
        reject(error); 
      })
    });
  }

  semakan(data: any){
    let body = new FormData();
    body.append('tag', data.tag);
    body.append('no', data.no);

    return new Promise((resolve, reject)=>{
      let url = this.baseURL + '/oneapps/json/index.php';
      this.http.post(url, body)
      .subscribe(res=>{
        let response: any = res;
        resolve(response);
      }, error => {
        reject(error); 
      })
    });
  }

  getContactByName(name: any){
    return new Promise((resolve, reject)=>{
      let url = this.baseURL + 'mobile/json/contacts_arr.php?name='+name;
      this.http.get(url)
      .subscribe(res=>{
        let response: any = res;
        resolve(response);
      }, error => {
        reject(error); 
      })
    });
  }

  getContactById(id: any){
    console.log('id ', id)
    console.log(this.contacts1);
    let contact = this.contacts1.find((contact_) => 
    {
      return contact_.id == id;
    });
    return contact;
  }

}
