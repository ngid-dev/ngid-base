import { Component, OnInit } from '@angular/core';
import { GlobalService } from './core/global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngid-base';
  constructor(private _globalService: GlobalService) {}

  ngOnInit(): void {
    console.log(this._globalService.config);
    console.log(this._globalService.session);
  }
}
