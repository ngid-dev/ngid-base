import { Component, OnInit } from '@angular/core';
import { GlobalService } from './core/global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public currentDate: Date;
  constructor(public globalService: GlobalService) {}

  ngOnInit(): void {
    this.currentDate = new Date();
    console.log(this.globalService.config);
    console.log(this.globalService.session);
  }

  public handleSignIn(): void {
    localStorage.setItem('sid', '1');
  }
}
