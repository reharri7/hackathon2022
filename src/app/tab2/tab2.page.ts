import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit{

  public isLoading = false;
  public listOfBunz = [
    {
    name: 'IT'
    },
    {
      name: 'Janitor'
    },
    {
      name: 'PHP'
    },
    {
      name: 'Phortran'
    },
    {
      name: 'Pascal'
    }
  ];
  constructor() {}

  ngAfterViewInit() {
    this.isLoading = true;
    console.log(this.listOfBunz);
    this.isLoading = false;
  }
}
