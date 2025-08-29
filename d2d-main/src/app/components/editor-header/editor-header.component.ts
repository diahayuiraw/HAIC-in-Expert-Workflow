import { Component } from '@angular/core';

@Component({
  selector: 'editor-header',
  templateUrl: './editor-header.component.html',
  styleUrl: './editor-header.component.css'
})
export class EditorHeaderComponent {
  isVisible = false;
  openGenerator() {
    this.isVisible = !this.isVisible;
  }
}
