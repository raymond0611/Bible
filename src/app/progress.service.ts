import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  subPageCount = 2; // 假設你有5個子頁面
  percentage = 0;
  percentageUpdated = new Subject<number>();
  subPagePercentageUpdated = new EventEmitter<{pageIndex: number, percentage: number}>();

  constructor() { }

  updateProgress() {
    let totalPercentage = 0;
    for (let i = 0; i < this.subPageCount; i++) {
      const subPagePercentage = localStorage.getItem('subPagePercentage' + i);
      if (subPagePercentage) {
        totalPercentage += parseFloat(subPagePercentage);
      }
    }
    this.percentage = totalPercentage / this.subPageCount;
    this.percentageUpdated.next(this.percentage);
  }

}
