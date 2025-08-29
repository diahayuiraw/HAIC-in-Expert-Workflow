import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-twilight';

@Component({
  selector: 'editor-module-ts',
  templateUrl: './editor-module-ts.component.html',
  styleUrls: ['./editor-module-ts.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class EditorModuleTsComponent implements AfterViewInit {

  @ViewChild('editor') private editorRef?: ElementRef<HTMLElement>;

  moduleTsVariants: string[] = [
    `import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }`,

    `import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent }  from './main.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MainComponent ],
  bootstrap:    [ MainComponent ]
})
export class MainModule { }`,

    `import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OtherComponent }  from './other.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ OtherComponent ],
  bootstrap:    [ OtherComponent ]
})
export class OtherModule { }`
  ];

  constructor() { }

  ngAfterViewInit(): void {
    if (this.editorRef && this.editorRef.nativeElement) {
      const editor = ace.edit(this.editorRef.nativeElement);
      editor.setTheme('ace/theme/twilight');
      editor.session.setMode('ace/mode/typescript');
      editor.getSession().setValue(this.moduleTsVariants[0]);
      editor.clearSelection();
    }
  }

  onRegenerateClick(): void {
    if (this.editorRef && this.editorRef.nativeElement) {
      const editor = ace.edit(this.editorRef.nativeElement);
      const randomIndex = Math.floor(Math.random() * this.moduleTsVariants.length);
      editor.getSession().setValue(this.moduleTsVariants[randomIndex]);
      editor.clearSelection();
    }
  }
}