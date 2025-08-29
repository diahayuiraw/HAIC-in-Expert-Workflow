import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../../../service/app-services.service';

@Component({
  selector: 'app-screen-1',
  templateUrl: './screen-1.component.html',
  styleUrls: ['./screen-1.component.css']
})
export class Screen1Component implements OnInit {
  jsonData: any[] = [];
  selectedPreviewImage: string = './assets/img/white_board.png'; // Default image
  selectedTab: string = 'css';
  activeItemId: number | null = null; // Track the active item by ID

  constructor(private appServicesService: AppServicesService) {}

  ngOnInit() {
    this.appServicesService.getData().subscribe(data => {
      this.jsonData = data;
      this.setActiveItem(this.jsonData.find(item => item.class === 'active')); // Set the initial active item
    });
  }

  onItemClick(data: any) {
    this.setActiveItem(data);
  }

  setActiveItem(data: any) {
    if (data) {
      this.activeItemId = data.id;
      this.selectedPreviewImage = data.imgSrc;

      // Update the 'class' property of each item based on the active item
      this.jsonData.forEach(item => {
        item.class = item.id === this.activeItemId ? 'active' : '';
      });
    }
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}