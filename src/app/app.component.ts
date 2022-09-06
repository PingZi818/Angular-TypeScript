import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  intervalSub: any;
  title = 'Hello World!'
  showText = false;
  todaysDate = new Date()
  toggleText(): void{
    this.showText = !this.showText;
  }
  ngOnInit() {
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit');
    }, 1000);
  }
  ngOnDestroy(){
    if(this.intervalSub) {
      clearInterval(this.intervalSub)
    }
  }
}
