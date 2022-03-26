import {AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit {

  public isLoading = false;

  constructor() {}

  ngAfterViewInit() {
    this.isLoading = true;

    this.isLoading = false;

  }
}
