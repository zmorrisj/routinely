import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperMethodsService {

  public indexOfMax(a: Array<any>) {

    // Set default values
    let max = a[0];
    let maxIndex = 0;

    if (a.length === 0) { return -1; }

    for (let i = 1; i < a.length; i++) {
      if (a[i] > max) {
        maxIndex = i;
        max = a[i];
      }
    }

    return maxIndex;
  }

}
