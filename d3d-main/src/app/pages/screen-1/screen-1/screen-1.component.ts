import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { AppServicesService } from '../../../service/app-services.service';
import { EditorComponent } from '../../../components/editor/editor.component';
import { EditorHtmlComponent } from '../../../components/editor-html/editor-html.component';
import { EditorTsComponent } from '../../../components/editor-ts/editor-ts.component';
import { EditorModuleTsComponent } from '../../../components/editor-module-ts/editor-module-ts.component';
import { EditorJsComponent } from '../../../components/editor-js/editor-js.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-screen-1',
  templateUrl: './screen-1.component.html',
  styleUrls: ['./screen-1.component.css']
})
export class Screen1Component implements OnInit {

  @ViewChild(EditorComponent) private editorComponent?: EditorComponent;
  @ViewChild(EditorHtmlComponent) private editorHtmlComponent?: EditorHtmlComponent;
  @ViewChild(EditorTsComponent) private editorTsComponent?: EditorTsComponent;
  @ViewChild(EditorModuleTsComponent) private editorModuleTsComponent?: EditorModuleTsComponent;
  @ViewChild(EditorJsComponent) private editorJsComponent?: EditorJsComponent;

  jsonData: any[] = [];
  selectedPreviewImage: string = './assets/img/white_board.png';
  selectedTab: string = 'css';
  activeItemId: number | null = null;
  SelectedCode: string = '';
  figmaData: any = [];
  active = 0;
  loading = false;  // New loading state
  loadingText = 'Thinking...';  // Text to display during the loading process
  appServicesService = inject(AppServicesService)
  codeArray: any = 0;
  showRegenerateButton = false;  // Initially hidden

  private codeSubscription: Subscription = new Subscription();
  private codeA: Subscription = new Subscription();



  constructor() {}

  ngOnInit() {
    this.appServicesService.getData().subscribe(data => {
      this.jsonData = data;
      this.setActiveItem(this.jsonData.find(item => item.class === 'active'));
    });

    this.codeSubscription = this.appServicesService.code$.subscribe((value) => {
      this.SelectedCode = value;
    });

    this.codeA = this.appServicesService.codeArray$.subscribe((value) => {
      this.codeArray = value;
    });

    this.figmaData = this.appServicesService.getFigmaData();
  }

  findFigma(index: any) {
    this.active = index;
    this.appServicesService.codeArray.next(index);
  }
  onCodeGenerate() {
    this.loading = true;  // Start loading
    this.loadingText = "Thinking...";  // Set initial loading text
    this.showRegenerateButton = false;  // Hide regenerate button while generating code
    const animationInterval = this.animateLoadingText();  // Trigger the text animation
  
    const data = {
      image_url: this.figmaData[this.active].image_url,
      json_data: this.figmaData[this.active].json_data,
      code_format: this.SelectedCode
    };
  
    // Simulate an async operation, replace this with your actual service call
    this.appServicesService.generateCode(data).subscribe(
      (response) => {
        console.log('Generated Code:', response);
        if (response.jsArray) {
          this.appServicesService.setAllCodeData(response.cssArray, null, null, response.jsArray);
        } else {
          this.appServicesService.setAllCodeData(response.cssArray, response.tsArray, response.htmlArray, null);
        }
        this.codeArray = 1;
        this.loading = false;  // Stop loading after receiving the response
        this.showRegenerateButton = true;  // Now show the regenerate button
        clearInterval(animationInterval);  // Stop the loading text animation
      },
      (error) => {
        console.error('Error:', error);
        this.loading = false;  // Stop loading on error
        this.showRegenerateButton = true;  // Allow the user to regenerate in case of an error
        clearInterval(animationInterval);  // Stop the loading text animation
      }
    );
  }
  
  animateLoadingText() {
    let dotCount = 0;
    let maxDots = 3;
  
    const addDots = (text: string) => {
      return setInterval(() => {
        if (dotCount < maxDots) {
          this.loadingText += '.';
          dotCount++;
        } else {
          this.loadingText = text;  // Reset to the provided text after 3 dots
          dotCount = 0;
        }
      }, 1000);  // Add a dot every second
    };
  
    // Start the text animation with "Thinking..." and return the interval ID
    return addDots('Generating');
  }
  onItemClick(data: any) {
    this.setActiveItem(data);
  }

  setActiveItem(data: any) {
    if (data) {
      this.activeItemId = data.id;
      this.selectedPreviewImage = data.imgSrc;

      this.jsonData.forEach(item => {
        item.class = item.id === this.activeItemId ? 'active' : '';
      });
    }
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  onRegenerateClick(): void {
    console.log("Regenerate button clicked");

    if (this.selectedTab === 'css' && this.editorComponent) {
      this.editorComponent.onRegenerateClick();
    } else if (this.selectedTab === 'html' && this.editorHtmlComponent) {
      this.editorHtmlComponent.onRegenerateClick();
    } else if (this.selectedTab === 'ts' && this.editorTsComponent) {
      this.editorTsComponent.onRegenerateClick();
    } else if (this.selectedTab === 'module' && this.editorModuleTsComponent) {
      this.editorModuleTsComponent.onRegenerateClick();
    } else if (this.selectedTab === 'js' && this.editorJsComponent) {
      this.editorJsComponent.onRegenerateClick();
    }
  }

  ngOnDestroy(): void {
    if (this.codeSubscription) {
      this.codeSubscription.unsubscribe();
    }
    if (this.codeA) {
      this.codeA.unsubscribe();
    }
  }
}