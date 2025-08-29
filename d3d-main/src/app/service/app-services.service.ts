import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  constructor(private http: HttpClient) { }
  private apiUrl = "assets/json/data.json";
  private codeSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Angular');
  public code$: Observable<string> = this.codeSubject.asObservable();

  private figmaDataSubject = new BehaviorSubject<any>(null);  // Initially, it's set to null
  figmaData$ = this.figmaDataSubject.asObservable(); 

  private cssCode = new BehaviorSubject<any>(null);  // Initially, it's set to null
  cssC$ = this.cssCode.asObservable(); 

  private tsCode = new BehaviorSubject<any>(null);  // Initially, it's set to null
  tsC$ = this.tsCode.asObservable(); 

  private htmlCode = new BehaviorSubject<any>(null);  // Initially, it's set to null
  htmlC$ = this.htmlCode.asObservable(); 

  private jsCode = new BehaviorSubject<any>(null);  // Initially, it's set to null
  jsC$ = this.jsCode.asObservable(); 


  public codeArray = new BehaviorSubject<any>(0); 
  public codeArray$: Observable<string> = this.codeArray.asObservable();
  

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
  getFigma(urlValue: any): Observable<any> {
    const payload = { figma_url: urlValue };  // Build the payload
    return this.http.post<any>("https://genx-flask.vercel.app/get_figma_components", payload);
  }

  setFigmaData(data: any): void {
    this.figmaDataSubject.next(data);  // Update the BehaviorSubject with new data
  }

  getFigmaData(): any {
    return this.figmaDataSubject.getValue();  // Get the current value of the BehaviorSubject
  }


  AngularCode(){
    this.codeSubject.next('Angular');
    this.codeArray.next(0)
  }
  ReactCode(){
    this.codeSubject.next('React js');
    this.codeArray.next(0)
  }

  getcodeArray(){
    return this.codeArray.getValue();
  }

  generateCode(data: any): Observable<any> {
    return this.http.post<any>('https://genx-flask.vercel.app/generate_code', data);
  }

  setAllCodeData(CSS:any,Ts:any,Html:any,Js:any): void {
    if(Js==null){
    this.cssCode.next(CSS); 
    this.htmlCode.next(Html);
    this.tsCode.next(Ts);
    this.codeArray.next(1)
    }else{
      this.cssCode.next(CSS);
      this.jsCode.next(Js);
      this.codeArray.next(1)
    }
  }

  getCssCode(): any {
    return this.cssCode.getValue();  
  }

  getTsCode(): any {
    return this.tsCode.getValue();  
  }

  getHtmlCode(): any {
    return this.htmlCode.getValue();  
  }

  getJsCode(): any {
    return this.jsCode.getValue();  
  }


}
