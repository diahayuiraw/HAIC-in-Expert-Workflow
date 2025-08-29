import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input} from '@angular/core';
import * as ace from "ace-builds";
import 'ace-builds/src-noconflict/theme-twilight';
@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent{



  constructor() { }
  @ViewChild('editor') private editorRef?: ElementRef<HTMLElement>;
  ngAfterViewInit(): void {
    // @ts-ignore
    const editor = ace.edit(this.editorRef?.nativeElement);
    editor.setTheme('ace/theme/twilight'); // Set desired theme
    editor.session.setMode('ace/mode/css'); // Set desired language mode
    editor.getSession().setValue(`body {
  margin: 25px;
  background-color: rgb(240,240,240);
  font-family: arial, sans-serif;
  font-size: 14px;
}

/* Applies to all <h1>...</h1> elements. */
h1 {
  font-size: 35px;
  font-weight: normal;
  margin-top: 5px;
}

/* Applies to all elements with <... class="someclass"> specified. */
.someclass { color: red; }

/* Applies to the element with <... id="someid"> specified. */
#someid { color: green; }`);
    editor.clearSelection(); // Clear selection
  }

}
