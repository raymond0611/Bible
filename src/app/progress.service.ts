import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  percentageUpdated = new EventEmitter<number>();
  subPagePercentageUpdated = new EventEmitter<{pageIndex: number, percentage: number}>();
  oldTestamentPercentage = 0;
  newTestamentPercentage = 0;
  categoryPercentages: number[] = [];
  oldTestamentCategoryIndex = 0;
  newTestamentCategoryIndex = 0;
  categories: any[] = [];
  percentage = 0;
  subPagePercentages: number[] = [];

  constructor() { }

  saveState() {
    localStorage.setItem('oldTestamentPercentage', this.oldTestamentPercentage.toString());
    localStorage.setItem('newTestamentPercentage', this.newTestamentPercentage.toString());
  }

  loadState() {
    const oldTestamentPercentage = localStorage.getItem('oldTestamentPercentage');
    const newTestamentPercentage = localStorage.getItem('newTestamentPercentage');
    if (oldTestamentPercentage) {
      this.oldTestamentPercentage = parseFloat(oldTestamentPercentage);
    }
    if (newTestamentPercentage) {
      this.newTestamentPercentage = parseFloat(newTestamentPercentage);
    }
  }
  
  updateProgress() {
    let oldTestamentCount = 0;
    let newTestamentCount = 0;
    let oldTestamentPercentage = 0;
    let newTestamentPercentage = 0;
    let completedOldTestamentSubPageCount = 0;
    let completedNewTestamentSubPageCount = 0;
    let completedCategoryOldTestamentSubPageCount = 0;
    let completedCategoryNewTestamentSubPageCount = 0;
    let currentCategoryIndex = -1;
    for (let i = 0; i < this.categories.length; i++) {
      let categoryPercentage = 0;
      let categoryOldTestamentCount = 0;
      let categoryNewTestamentCount = 0;
      let categoryCompletedOldTestamentSubPageCount = 0;
      let categoryCompletedNewTestamentSubPageCount = 0;
      for (let j = 0; j < this.categories[i].items.length; j++) {
        const subPagePercentage = localStorage.getItem('subPagePercentage' + (i * this.categories[i].items.length + j));
        if (subPagePercentage) {
          this.subPagePercentages[i * this.categories[i].items.length + j] = parseFloat(subPagePercentage);
          if (this.categories[i].items[j].testament === 'old') {
            oldTestamentCount++;
            oldTestamentPercentage += parseFloat(subPagePercentage) / 39;
            if (parseFloat(subPagePercentage) === 100) {
              completedOldTestamentSubPageCount++;
            }
            if (i === this.oldTestamentCategoryIndex) {
              categoryOldTestamentCount++;
              categoryCompletedOldTestamentSubPageCount += parseFloat(subPagePercentage) === 100 ? 1 : 0;
            }
          } else if (this.categories[i].items[j].testament === 'new') {
            newTestamentCount++;
            newTestamentPercentage += parseFloat(subPagePercentage) / 27;
            if (parseFloat(subPagePercentage) === 100) {
              completedNewTestamentSubPageCount++;
            }
            if (i === this.newTestamentCategoryIndex) {
              categoryNewTestamentCount++;
              categoryCompletedNewTestamentSubPageCount += parseFloat(subPagePercentage) === 100 ? 1 : 0;
            }
          }
          if (i === currentCategoryIndex) {
            if (this.categories[i].items[j].testament === 'old') {
              categoryOldTestamentCount++;
              categoryCompletedOldTestamentSubPageCount += parseFloat(subPagePercentage) === 100 ? 1 : 0;
            } else if (this.categories[i].items[j].testament === 'new') {
              categoryNewTestamentCount++;
              categoryCompletedNewTestamentSubPageCount += parseFloat(subPagePercentage) === 100 ? 1 : 0;
            }
          }
          categoryPercentage += parseFloat(subPagePercentage) / this.categories[i].items.length;
        }
      }
      this.categoryPercentages[i] = parseFloat(categoryPercentage.toFixed(2));
      if (i === this.oldTestamentCategoryIndex) {
        const categoryOldTestamentTotalCount = categoryOldTestamentCount * 39;
        if (oldTestamentCount > 0) {
          const categoryCompletedOldTestamentCount = categoryOldTestamentCount * oldTestamentPercentage + categoryCompletedOldTestamentSubPageCount;
          oldTestamentPercentage = parseFloat((Math.min(categoryCompletedOldTestamentCount / categoryOldTestamentTotalCount * 100, 100)).toFixed(2));
          completedCategoryOldTestamentSubPageCount += categoryCompletedOldTestamentSubPageCount;
        } else {
          oldTestamentPercentage = 0;
        }
      }
      if (i === this.newTestamentCategoryIndex) {
        const categoryNewTestamentTotalCount = categoryNewTestamentCount * 27;
        if (newTestamentCount > 0) {
          const categoryCompletedNewTestamentCount = categoryNewTestamentCount * newTestamentPercentage + categoryCompletedNewTestamentSubPageCount;
          newTestamentPercentage = parseFloat((Math.min(categoryCompletedNewTestamentCount / categoryNewTestamentTotalCount * 100, 100)).toFixed(2));
          completedCategoryNewTestamentSubPageCount += categoryCompletedNewTestamentSubPageCount;
        } else {
          newTestamentPercentage = 0;
        }
      }
      currentCategoryIndex = i;
    }
    if (oldTestamentCount === 0) {
      oldTestamentPercentage = 0;
    }
    if (newTestamentCount === 0) {
      newTestamentPercentage = 0;
    }
    oldTestamentPercentage = parseFloat(oldTestamentPercentage.toFixed(2));
    newTestamentPercentage = parseFloat(newTestamentPercentage.toFixed(2));
    const oldTestamentTotalCount = oldTestamentCount * 39;
    const newTestamentTotalCount = newTestamentCount * 27;
    const completedOldTestamentCount = oldTestamentCount * oldTestamentPercentage + completedOldTestamentSubPageCount;
    const completedNewTestamentCount = newTestamentCount * newTestamentPercentage + completedNewTestamentSubPageCount;
    const completedCount = completedOldTestamentCount + completedNewTestamentCount;
    const totalCount = oldTestamentTotalCount + newTestamentTotalCount;
    this.percentage = parseFloat((Math.min(completedCount / totalCount * 100, 100)).toFixed(2));
    this.oldTestamentPercentage = oldTestamentPercentage;
    this.newTestamentPercentage = newTestamentPercentage;
    this.percentageUpdated.emit(this.percentage);
  }
}