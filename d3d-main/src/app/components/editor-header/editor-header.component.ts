import { Component, Output, EventEmitter, Input, inject } from '@angular/core';
import { AppServicesService } from '../../service/app-services.service';

@Component({
  selector: 'editor-header',
  templateUrl: './editor-header.component.html',
  styleUrls: ['./editor-header.component.css']
})
export class EditorHeaderComponent {
  @Output() regenerate: EventEmitter<void> = new EventEmitter<void>();

  // This is the missing input declaration that caused the error
  @Input() showRegenerateButton: boolean = true;  // Input to control the visibility of the regenerate button

  codeTitle: string = "Angular";

  appService = inject(AppServicesService);

  onRegenerateClick(): void {
    this.regenerate.emit();  // Emit the event to the parent component
  }

  onAngularClick(): void {
    this.codeTitle = "Angular";
    this.appService.AngularCode();
  }

  onReactClick(): void {
    this.codeTitle = "React js";
    this.appService.ReactCode();
  }

  isVisible = false;
  openGenerator() {
    this.isVisible = !this.isVisible;
  }
  tryAgain() {
    if (this.codeTitle === 'Angular') {
      this.onAngularClick(); // Call Angular function
    } else if (this.codeTitle === 'React js') {
      this.onReactClick(); // Call React function
    }
  }
}