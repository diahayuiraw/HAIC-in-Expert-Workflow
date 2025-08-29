import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-clouds_midnight';
@Component({
  selector: 'editor-specifications',
  templateUrl: './editor-specifications.component.html',
  styleUrl: './editor-specifications.component.css'
})
export class EditorSpecificationsComponent {
  @ViewChild('editor') private editorRef?: ElementRef<HTMLElement>;
  ngAfterViewInit(): void {
    // @ts-ignore
    const editor = ace.edit(this.editorRef?.nativeElement);
    editor.setTheme('ace/theme/clouds_midnight'); // Set desired theme
    editor.session.setMode('ace/mode/css'); // Set desired language mode
    editor.getSession().setValue(`
    width: 338px;
    height: 280px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid var(--Secondary-Blue, #B1E3FF);
    background: #FFF;
    box-shadow: 0px 6px 8px 0px rgba(122, 112, 112, 0.25);`);
    editor.clearSelection(); // Clear selection
  }
}
