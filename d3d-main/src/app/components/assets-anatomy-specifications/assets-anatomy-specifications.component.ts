import { Component } from '@angular/core';

@Component({
  selector: 'assets-anatomy-specifications',
  templateUrl: './assets-anatomy-specifications.component.html',
  styleUrl: './assets-anatomy-specifications.component.css'
})
export class AssetsAnatomySpecificationsComponent {
  selectedTab: string = 'specifications';
data_box = [

  {
    "id":2,
    "img":"./assets/img/2.png",
    "title": "up_arrow_mat",
  },
  {
    "id":3,
    "img":"./assets/img/3.png",
    "title": "dw_arrow_mat",
  },
  {
    "id":4,
    "img":"./assets/img/4.png",
    "title": "Filter Alt",
  },
  {
    "id":5,
    "img":"./assets/img/5.png",
    "title": "close_mat",
  }
]
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
