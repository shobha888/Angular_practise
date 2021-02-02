import { ParseTreeResult } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  myEvent(evt)
  {
    console.warn(evt)
  }
  currentval = " "
  GetValue1(event)
  {
    console.warn(event.target.value)
    this.currentval = event.target.value;
  }

  GetValue(val)
  {
    console.warn(val)
    this.currentval = val
  }
  name = "shobha"
  MyButtonText = "click Me";
  disablebox = true
  enablebox()
  {
    this.disablebox = false
    this.MyButtonText = "Clicked";
    this.name = "Abhishek";
  }
}