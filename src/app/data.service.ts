import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root', // Makes the service available application-wide.
})
export class DataService {
  // Simulates a REST API emitting JSON objects every 2 seconds
  getData(): Observable<{ id: number; name: string }> {
    return interval(2000).pipe(
      map((i) => ({
        id: i + 1, // Incremental ID
        name: `Item ${i + 1}`, // Simulated name
      }))
    );
  }
}
