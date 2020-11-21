import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../services/callApi/call-api.service'


@Component({
  selector: 'app-compothree',
  templateUrl: './compothree.component.html',
  styleUrls: ['./compothree.component.css']
})
export class CompothreeComponent implements OnInit {

 
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
