import { Component } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  isRotated: boolean = false;

  toggleRotation() {
    this.isRotated = !this.isRotated;
  }
}
