import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe-demo',
  standalone: true,
  imports: [CommonModule], // Imports Angular's common features
  template: `
    <div>
      <h2>AsyncPipe Demo</h2>
      <p>Fetching data from a mocked REST API...</p>
      <div *ngIf="data$ | async as data">
        <p><strong>ID:</strong> {{ data.id }}</p>
        <p><strong>Name:</strong> {{ data.name }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      div {
        font-family: Arial, sans-serif;
      }
      h2 {
        color: #3f51b5;
      }
    `,
  ],
})
export class AsyncPipeDemoComponent {
  // Observable of data streamed from the service
  data$: Observable<{ id: number; name: string }>;

  constructor(private dataService: DataService) {
    // Subscribe to the service's data stream
    this.data$ = this.dataService.getData();
  }
}
