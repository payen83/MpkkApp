import { Component, OnInit } from '@angular/core';
import { MpkkService } from 'src/app/services/mpkk.service';

@Component({
  selector: 'app-semakan',
  templateUrl: './semakan.page.html',
  styleUrls: ['./semakan.page.scss'],
})
export class SemakanPage implements OnInit {
  public form: any;
  tag: any;
  taksiran: any;
  constructor(
    public mpkk: MpkkService
  ) {
    this.form = {tag: null, no: null};
    this.tag = null;
    this.taksiran = null;
   }

  ngOnInit() {
  }

  onSemakan(){
    this.mpkk.semakan(this.form).then(res => {
      let response: any = res;
      console.log(response);
      this.tag = response.tag;

      // console.log(this.tag)
      this.taksiran = response.taksiran[0];

    })
  }

}
