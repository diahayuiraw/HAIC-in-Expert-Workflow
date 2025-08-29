import { Component, AfterViewInit, ViewChild, ElementRef, inject } from '@angular/core';
import * as ace from "ace-builds";
import 'ace-builds/src-noconflict/theme-twilight';
import { AppServicesService } from '../../service/app-services.service';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit {

  @ViewChild('editor') private editorRef?: ElementRef<HTMLElement>;

  apiService = inject(AppServicesService)

  cssVariants: string[] = [
   this.apiService.getCssCode()
  ];

  constructor() { }

  ngAfterViewInit(): void {
    if (this.editorRef && this.editorRef.nativeElement) {
      const editor = ace.edit(this.editorRef.nativeElement);
      editor.setTheme('ace/theme/twilight');
      editor.session.setMode('ace/mode/css');
      editor.getSession().setValue(this.cssVariants[0]);
      editor.clearSelection();
    }
  }

  onRegenerateClick(): void {
    if (this.editorRef && this.editorRef.nativeElement) {
      const editor = ace.edit(this.editorRef.nativeElement);
      const randomIndex = Math.floor(Math.random() * this.cssVariants.length);
      editor.getSession().setValue(this.cssVariants[randomIndex]);
      editor.clearSelection();
    }
  }
}
