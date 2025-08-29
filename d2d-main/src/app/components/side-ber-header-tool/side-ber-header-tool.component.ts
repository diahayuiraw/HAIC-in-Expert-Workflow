import { Component } from '@angular/core';

@Component({
  selector: 'side-ber-header-tool',
  templateUrl: './side-ber-header-tool.component.html',
  styleUrl: './side-ber-header-tool.component.css'
})
export class SideBerHeaderToolComponent {
  isVisible: boolean = false;
  openModal(){
    this.isVisible = !this.isVisible
  }
ngOnInit() {

}
}
