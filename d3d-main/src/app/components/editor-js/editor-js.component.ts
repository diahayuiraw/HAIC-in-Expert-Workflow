import { Component, AfterViewInit, ViewChild, ElementRef, inject } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-twilight';
import { AppServicesService } from '../../service/app-services.service';

@Component({
  selector: 'app-editor-js',
  templateUrl: './editor-js.component.html',
  styleUrl: './editor-js.component.css'
})
export class EditorJsComponent {

  @ViewChild('editor') private editorRef?: ElementRef<HTMLElement>;
 
  apiService = inject(AppServicesService)

  jsVariants: string[] = [
    this.apiService.getJsCode()
  ];

  constructor() { }

  ngAfterViewInit(): void {
    if (this.editorRef && this.editorRef.nativeElement) {
      const editor = ace.edit(this.editorRef.nativeElement);
      editor.setTheme('ace/theme/twilight');
      editor.session.setMode('ace/mode/html');
      editor.getSession().setValue(this.jsVariants[0]);
      editor.clearSelection();
    }
  }

  onRegenerateClick(): void {
    if (this.editorRef && this.editorRef.nativeElement) {
      const editor = ace.edit(this.editorRef.nativeElement);
      const randomIndex = Math.floor(Math.random() * this.jsVariants.length);
      editor.getSession().setValue(this.jsVariants[randomIndex]);
      editor.clearSelection();
    }
  }

}
