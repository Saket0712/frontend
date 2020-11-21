import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CallApiService } from '../services/callApi/call-api.service'
@Component({
  selector: 'app-ques3',
  templateUrl: './ques3.component.html',
  styleUrls: ['./ques3.component.css']
})
export class Ques3Component implements OnInit {

  apiForm: FormGroup
  updateForm: FormGroup

  userArr;
  UpArr
  modalId
  
  constructor(private callApi:CallApiService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.apiForm = this.fb.group({
      phone:['', Validators.required],
    })

    this.updateForm = this.fb.group({
      phone:['', Validators.required],
    })


    this.getUser()
  }

  setModalId(id){
    this.modalId=id;
  }

  async Add(){
    const res:any = await this.callApi.Add(this.apiForm.value)
    if(res.success){
      alert(res.message)
    }

    else{
      alert(res.message)
      
    }
    window.location.reload();

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

  async updateUser()
  {
    const res:any= await this.callApi.updateUser(this.modalId,this.updateForm.value)
    this.UpArr=res.data
    console.log(this.UpArr)
    if(res.success) {
      alert(res.message)
     }
     else{
       alert(res.message)
     }
     window.location.reload();
  }

}
