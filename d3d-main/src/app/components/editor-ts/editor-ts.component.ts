import { Component, AfterViewInit, ViewChild, ElementRef, inject } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-twilight';
import { AppServicesService } from '../../service/app-services.service';

@Component({
  selector: 'editor-ts',
  templateUrl: './editor-ts.component.html',
  styleUrls: ['./editor-ts.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class EditorTsComponent implements AfterViewInit {

  @ViewChild('editor') private editorRef?: ElementRef<HTMLElement>;

  apiService = inject(AppServicesService)

  tsVariants: string[] = [
   this.apiService.getTsCode()
  ];

  constructor() { }

  ngAfterViewInit(): void {
    if (this.editorRef && this.editorRef.nativeElement) {
      const editor = ace.edit(this.editorRef.nativeElement);
      editor.setTheme('ace/theme/twilight');
      editor.session.setMode('ace/mode/typescript');
      editor.getSession().setValue(this.tsVariants[0]);
      editor.clearSelection();
    }
  }

  onRegenerateClick(): void {
    if (this.editorRef && this.editorRef.nativeElement) {
      const editor = ace.edit(this.editorRef.nativeElement);
      const randomIndex = Math.floor(Math.random() * this.tsVariants.length);
      editor.getSession().setValue(this.tsVariants[randomIndex]);
      editor.clearSelection();
    }
  }
}