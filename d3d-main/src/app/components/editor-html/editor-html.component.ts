import { Component, AfterViewInit, ViewChild, ElementRef, inject } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-twilight';
import { AppServicesService } from '../../service/app-services.service';

@Component({
  selector: 'editor-html',
  templateUrl: './editor-html.component.html',
  styleUrls: ['./editor-html.component.css']
})
export class EditorHtmlComponent implements AfterViewInit {

  @ViewChild('editor') private editorRef?: ElementRef<HTMLElement>;

  apiService = inject(AppServicesService)

  htmlVariants: string[] = [
    this.apiService.getHtmlCode()
  ];

  constructor() { }

  ngAfterViewInit(): void {
    if (this.editorRef && this.editorRef.nativeElement) {
      const editor = ace.edit(this.editorRef.nativeElement);
      editor.setTheme('ace/theme/twilight');
      editor.session.setMode('ace/mode/html');
      editor.getSession().setValue(this.htmlVariants[0]);
      editor.clearSelection();
    }
  }

  onRegenerateClick(): void {
    if (this.editorRef && this.editorRef.nativeElement) {
      const editor = ace.edit(this.editorRef.nativeElement);
      const randomIndex = Math.floor(Math.random() * this.htmlVariants.length);
      editor.getSession().setValue(this.htmlVariants[randomIndex]);
      editor.clearSelection();
    }
  }
}