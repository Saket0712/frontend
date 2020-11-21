import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../services/callApi/call-api.service'


@Component({
  selector: 'app-compotwo',
  templateUrl: './compotwo.component.html',
  styleUrls: ['./compotwo.component.css']
})
export class CompotwoComponent implements OnInit {

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
