import { Component, OnInit, ViewChild } from '@angular/core';
import { MpkkService } from '../services/mpkk.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  path: string;
  contacts: Array<any>;
  contactsList: Array<any>;
  constructor(
    protected mpkk: MpkkService
  ) {
    this.contacts = [];
    this.contactsList =[];
    this.path = 'http://api.mpkk.gov.my/img/yellowpages/10678.png';
  }

  ngOnInit(){
    this.mpkk.getAllContacts().then(result=>{
      console.log(result);
      let res: any = result;
      this.contacts = res;
      this.insertData();
    }).catch(err=>{
      console.log('error: ', err);
    })
  }

  loadData(event) {
    setTimeout(() => {
      this.insertData();
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.contacts.length == 0) {
        event.target.disabled = true;
        this.infiniteScroll.disabled = true;
      }
    }, 1000);
  }

  insertData(){
    //insert data from all list to new list array;
    for (let i=0; i < 10; i++){
      if(this.contacts.length<=0){
        break;
      } else {
        let newData = this.contacts.shift();
        this.contactsList.push(newData);
      }
    }

  }
}
