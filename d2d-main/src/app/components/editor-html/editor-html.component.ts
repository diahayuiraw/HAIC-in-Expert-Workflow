import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-twilight';
@Component({
  selector: 'editor-html',
  templateUrl: './editor-html.component.html',
  styleUrl: './editor-html.component.css'
})
export class EditorHtmlComponent {
  @ViewChild('editor') private editorRef?: ElementRef<HTMLElement>;
  ngAfterViewInit(): void {
    // @ts-ignore
    const editor = ace.edit(this.editorRef?.nativeElement);
    editor.setTheme('ace/theme/twilight'); // Set desired theme
    editor.session.setMode('ace/mode/html'); // Set desired language mode
    editor.getSession().setValue(`<!DOCTYPE html>\n<html>\n<head>\n\t<title>My HTML Page</title>\n</head>\n<body>\n\t<h1>Hello, Ace Editor!</h1>\n\t<p>Start coding here...</p>\n</body>\n</html>`);
    editor.clearSelection(); // Clear selection
  }
}
