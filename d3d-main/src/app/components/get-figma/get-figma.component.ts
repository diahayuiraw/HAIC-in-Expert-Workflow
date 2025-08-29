import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppServicesService } from '../../service/app-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-figma',
  templateUrl: './get-figma.component.html',
  styleUrls: ['./get-figma.component.css']  // Correct property name
})
export class GetFigmaComponent {
  
  figma_url = new FormControl('');  // Reactive FormControl for the input
  figmaService = inject(AppServicesService);  // Inject the service
  router = inject(Router);
  loading = false;  // Add loading flag

  getFigma() {
    this.loading = true;  // Set loading to true when starting the API call
    console.log(this.figma_url.value);  // Log the URL value

    // Call the service and post the figma_url value
    this.figmaService.getFigma(this.figma_url.value).subscribe(
      (response) => {
        console.log("Response from API:", response.components);
        this.figmaService.setFigmaData(response.components);
        this.router.navigate(['/screen']);
        this.loading = false;  // Set loading to false when the request completes
      },
      (error) => {
        console.error("Error from API:", error);
        this.loading = false;  // Set loading to false in case of an error
      }
    );
  }
}