import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterViewInit{

  public isLoading = false;
  public listOfTrash = [
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
    this.isLoading = false;
  }

}
