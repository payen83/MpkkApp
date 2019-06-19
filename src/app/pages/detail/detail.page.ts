import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MpkkService } from 'src/app/services/mpkk.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  name: any;
  contact: any;
  constructor(
    protected activatedRoute: ActivatedRoute,
    protected mpkk: MpkkService,
  ) { 
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.contact = {image: null, name: null, ext: null, mobile1: null}
    //console.log('id', this.name);
  }

  ngOnInit() {
   // this.contact = this.mpkk.getContactById(this.id);
   this.mpkk.getContactByName(this.name).then(res=>{
     console.log(res);
     this.contact = res[0];
   })
  }

}
