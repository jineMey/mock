import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private appService: AppService) {

  }
  
  ngOnInit(): void {
    this.getMember();
    this.getExample();
  }
  
  /**
   * 
   */
  getMember() {
    const params = {
      pageIndex: 1,
      pageSize: 20
    }
    this.appService.getMember(params).subscribe(res => {
      console.log(res);
    })
  }
  
  addMember() {
    this.appService.addMember({
      name: 'hjx'
    }).subscribe(res => {
      
    })
  }

  getExample() {
    this.appService.getExample().subscribe(res => {
      console.log(res);
    })
  }

}
