import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CallApiService } from '../services/callApi/call-api.service';
@Component({
  selector: 'app-ques1',
  templateUrl: './ques1.component.html',
  styleUrls: ['./ques1.component.css']
})
export class Ques1Component implements OnInit {


  callForm: FormGroup
  lastForm: FormGroup
  userArr;
  constructor(private fb:FormBuilder, private callApi: CallApiService) { }

  ngOnInit(): void {
    this.callForm = this.fb.group({
      num: ['']
    })

    this.lastForm = this.fb.group({
      name: ['']
    })


  }

  Getnum(){
    // var x = document.getElementById('#number').textContent;
    var x = this.callForm.value
    var result = Math.pow( parseInt(x.num)+1, 2 ) + Math.pow(-1, parseInt(x.num));
    console.log(result)
    // document.getElementById('1').innerHTML.value = result.toString();
    // document.write(result.toString());
    this.Getuser(result);
  }

  Getuser(result){
    if(result) {
      this.userArr=result
      console.log(typeof(result))
    }
    else{
      alert(result)
    }
  }

  async Newdata(){
    const res:any = await this.callApi.Newdata(this.lastForm.value)
    if(res.success){
      alert(res.message)
    }

    else{
      alert(res.message)
      
    }
    window.location.reload();
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
