import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  callForm: FormGroup
  userArr;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.callForm = this.fb.group({
      num: ['']
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

 

  

}
