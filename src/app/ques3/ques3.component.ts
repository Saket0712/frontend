import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { CallApiService } from '../services/callApi/call-api.service'
@Component({
  selector: 'app-ques3',
  templateUrl: './ques3.component.html',
  styleUrls: ['./ques3.component.css']
})
export class Ques3Component implements OnInit {

  apiForm: FormGroup

  userArr;
  
  constructor(private callApi:CallApiService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.apiForm = this.fb.group({
      phone:['']
    })

    this.getUser()
  }

  async Add(){
    const res:any = await this.callApi.Add(this.apiForm.value)
    if(res.success){
      alert(res.message)
    }

    else{
      alert(res.message)
      
    }
  }

  async getUser(){
    const res:any = await this.callApi.getUser();
    if(res.success) {
      this.userArr=res.data
      console.log(this.userArr)
    }
    else{
      alert(res.message)
    }
  }

  async deleteData(id){
    const res:any = await this.callApi.deleteData(id)
    if(res.success) {
     alert(res.message)
    }
    else{
      alert(res.message)
    }
    this.ngOnInit();
  }


}
