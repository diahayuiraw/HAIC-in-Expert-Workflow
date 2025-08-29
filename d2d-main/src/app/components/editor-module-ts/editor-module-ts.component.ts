import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-twilight';

@Component({
  selector: 'editor-module-ts',
  templateUrl: './editor-module-ts.component.html',
  styleUrl: './editor-module-ts.component.css'
})
export class EditorModuleTsComponent {
  @ViewChild('editor') private editorRef?: ElementRef<HTMLElement>;
  ngAfterViewInit(): void {
    // @ts-ignore
    const editor = ace.edit(this.editorRef?.nativeElement);
    editor.setTheme('ace/theme/twilight'); // Set desired theme
    editor.session.setMode('ace/mode/typescript'); // Set desired language mode
    editor.getSession().setValue(`import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }`);
    editor.clearSelection(); // Clear selection
  }
}
