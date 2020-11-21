import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../services/callApi/call-api.service'

@Component({
  selector: 'app-compo-one',
  templateUrl: './compo-one.component.html',
  styleUrls: ['./compo-one.component.css']
})
export class CompoOneComponent implements OnInit {

  userArr
  constructor(private callApi: CallApiService) { }

  ngOnInit(): void {
    this.getTask()
  }
  
  async getTask(){
    const res:any = await this.callApi.getTask();
    if(res.success) {
      this.userArr=res.data
      console.log(this.userArr)
    }
    else{
      alert(res.message)
    }
  }

}
