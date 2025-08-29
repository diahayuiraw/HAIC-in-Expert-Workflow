import { Component } from '@angular/core';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-asset-download',
  templateUrl: './asset-download.component.html',
  styleUrls: ['./asset-download.component.css']
})
export class AssetDownloadComponent {
  // Options for the custom dropdowns
  scaleOptions = ['1x', '2x'];
  formatOptions = ['.png', '.svg'];

  // Selected values for the custom dropdowns
  selectedScale = '1x';
  selectedFormat = '.png';

  // Dropdown visibility state
  isScaleDropdownOpen = false;
  isFormatDropdownOpen = false;

  // Toggle the visibility of the scale dropdown
  toggleScaleDropdown() {
    this.isScaleDropdownOpen = !this.isScaleDropdownOpen;
  }

  // Toggle the visibility of the format dropdown
  toggleFormatDropdown() {
    this.isFormatDropdownOpen = !this.isFormatDropdownOpen;
  }

  // Set the selected scale and close the dropdown
  selectScale(scale: string) {
    this.selectedScale = scale;
    this.isScaleDropdownOpen = false;
  }

  // Set the selected format and close the dropdown
  selectFormat(format: string) {
    this.selectedFormat = format;
    this.isFormatDropdownOpen = false;
  }

  // Method to trigger download logic based on selected format
  async downloadAllAssets() {
    // Create a new JSZip instance
    const zip = new JSZip();

    // Check the selected format and add files accordingly
    if (this.selectedFormat === '.png') {
      // Fetch PNG files from the server
      const response1 = await fetch('https://diahayuiraw.github.io/assets/cardA_png.zip');
      const pngBlob1 = await response1.blob();
      zip.file("icon1.png", pngBlob1);

      const response2 = await fetch('https://diahayuiraw.github.io/assets/cardA_png.zip');
      const pngBlob2 = await response2.blob();
      zip.file("icon2.png", pngBlob2);
    } else if (this.selectedFormat === '.svg') {
      // Fetch SVG files from the server
      const response1 = await fetch('https://diahayuiraw.github.io/assets/cardA_svg.zip');
      const svgBlob1 = await response1.blob();
      zip.file("icon1.svg", svgBlob1);

      const response2 = await fetch('https://diahayuiraw.github.io/assets/cardA_svg.zip');
      const svgBlob2 = await response2.blob();
      zip.file("icon2.svg", svgBlob2);
    }

    // Generate the ZIP file and trigger download
    zip.generateAsync({ type: 'blob' }).then((content) => {
      // Use FileSaver.js to save the zip file locally
      saveAs(content, `assets${this.selectedFormat}.zip`);
    });
  }
}