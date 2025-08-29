import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, inject, OnDestroy } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-clouds_midnight';
import { AppServicesService } from '../../service/app-services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'anatomy',
  templateUrl: './anatomy.component.html',
  styleUrl: './anatomy.component.css'
})
export class AnatomyComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('editor') private editorRef?: ElementRef<HTMLElement>;

  appServicesService = inject(AppServicesService);
  figmaData: any;

  private codeA: Subscription = new Subscription();
  codeArray: any;
  editor: any;

  ngOnInit() {
    this.figmaData = this.appServicesService.getFigmaData();

    // Subscribe to codeArray changes
    this.codeA = this.appServicesService.codeArray$.subscribe((value) => {
      this.codeArray = value;

      // Update editor content when codeArray changes
      this.updateEditor();
    });
  }

  ngAfterViewInit(): void {
    // Initialize the ACE editor after the view is initialized
    this.editor = ace.edit(this.editorRef!.nativeElement);
    this.editor.setTheme('ace/theme/clouds_midnight');
    this.editor.session.setMode('ace/mode/css');

    // Set the initial value for the editor
    this.updateEditor();
  }

  updateEditor(): void {
    if (this.editor && this.figmaData && this.figmaData[this.codeArray]) {
      this.editor.getSession().setValue(this.figmaData[this.codeArray].json_data);
      this.editor.clearSelection(); // Clear any selection in the editor
    }
  }

  ngOnDestroy(): void {
    if (this.codeA) {
      this.codeA.unsubscribe();
    }
  }
}

