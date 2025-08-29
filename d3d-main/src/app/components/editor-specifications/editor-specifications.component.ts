import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, inject } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-clouds_midnight';
import { Subscription } from 'rxjs';
import { AppServicesService } from '../../service/app-services.service';
@Component({
  selector: 'editor-specifications',
  templateUrl: './editor-specifications.component.html',
  styleUrl: './editor-specifications.component.css'
})
export class EditorSpecificationsComponent {
  @ViewChild('editor') private editorRef?: ElementRef<HTMLElement>;

  appServicesService = inject(AppServicesService);
  figmaData: any;

  private codeA: Subscription = new Subscription();
  codeArray: any;
  editor: any;

  jsonData: any; // This will hold your JSON data
  cssString: string = ''; 


  ngOnInit() {
    this.figmaData = this.appServicesService.getFigmaData();

    this.codeA = this.appServicesService.codeArray$.subscribe((value) => {
      this.codeArray = value;
      this.jsonData = JSON.parse(this.figmaData[this.codeArray].json_data);
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
      this.extractCssProperties(this.jsonData);
      this.editor.getSession().setValue(this.cssString);
      this.editor.clearSelection(); // Clear any selection in the editor
    }
    
  }extractCssProperties(jsonData: any) {
    const cssProperties: { [key: string]: string } = {};
  
    const traverse = (node: any) => {
      // Extract width and height, scaling to match 338x280 if needed
      if (node.absoluteBoundingBox) {
        // Calculate scaling factor if necessary
        const targetWidth = 338;
        const targetHeight = 280;
        const scaleX = targetWidth / node.absoluteBoundingBox.width;
        const scaleY = targetHeight / node.absoluteBoundingBox.height;
        
        // Apply scaling
        cssProperties['width'] = `${Math.round(node.absoluteBoundingBox.width * scaleX)}px`;
        cssProperties['height'] = `${Math.round(node.absoluteBoundingBox.height * scaleY)}px`;
      }
  
      // Extract border radius
      if (node.cornerRadius) {
        cssProperties['border-radius'] = `${node.cornerRadius}px`;
      }
  
      // Extract border from strokes
      if (node.strokes && node.strokes.length > 0) {
        const stroke = node.strokes[0];
        if (stroke.type === 'SOLID') {
          const { r, g, b } = stroke.color;
          const color = `#${((1 << 24) + (Math.round(r * 255) << 16) + (Math.round(g * 255) << 8) + Math.round(b * 255)).toString(16).slice(1)}`;
          cssProperties['border'] = `${node.strokeWeight}px solid var(--Secondary-Blue, ${color})`;
        }
      }
  
      // Extract background color
      if (node.backgroundColor) {
        const { r, g, b } = node.backgroundColor;
        cssProperties['background'] = `var(--white-100, rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, 1))`;
      }
  
      // Extract box shadow from effects
      if (node.effects && node.effects.length > 0) {
        const effect = node.effects[0];
        if (effect.type === 'DROP_SHADOW') {
          const { r, g, b, a } = effect.color;
          cssProperties['box-shadow'] = `0px ${effect.offset.y}px ${effect.radius}px 0px rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
        }
      }
  
      // Recursively traverse children
      if (node.children) {
        for (const child of node.children) {
          traverse(child);
        }
      }
    };
  
    traverse(jsonData);
  
    // Sort and format the CSS properties
    const sortedCss = Object.keys(cssProperties)
      .sort()
      .reduce((obj: { [key: string]: string }, key: string) => {
        obj[key] = cssProperties[key];
        return obj;
      }, {});
  
    // Convert the CSS properties object to a CSS string
    this.cssString = Object.entries(sortedCss)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n');
  
    if (this.cssString) {
      this.cssString += '\n';
    }
  }
  ngOnDestroy(): void {
    if (this.codeA) {
      this.codeA.unsubscribe();
    }
  }
}
