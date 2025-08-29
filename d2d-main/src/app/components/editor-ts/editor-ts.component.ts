import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-twilight';

@Component({
  selector: 'editor-ts',
  templateUrl: './editor-ts.component.html',
  styleUrl: './editor-ts.component.css'
})
export class EditorTsComponent {
  @ViewChild('editor') private editorRef?: ElementRef<HTMLElement>;
  ngAfterViewInit(): void {
    // @ts-ignore
    const editor = ace.edit(this.editorRef?.nativeElement);
    editor.setTheme('ace/theme/twilight'); // Set desired theme
    editor.session.setMode('ace/mode/typescript'); // Set desired language mode
    editor.getSession().setValue(`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}`);
    editor.clearSelection(); // Clear selection
  }
}
