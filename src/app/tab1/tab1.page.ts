import { Component } from '@angular/core';
import { ProgressService } from '../progress.service';

interface Category {
  title: string;
  items: Item[];
}

interface Item {
  name: string;
  link: string;
  testament: 'old' | 'new';
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  categories: Category[] = [];
  categoryPercentages: number[] = [];
  subPagePercentages: number[] = [];
  percentage = 0; 
  oldTestamentPercentage = 0;
  newTestamentPercentage = 0;
  oldTestamentCategoryIndex = 0;
 newTestamentCategoryIndex = 1;

  constructor(private progressService: ProgressService) 
  {
    this.initializaJSONData();
    this.progressService.subPagePercentageUpdated.subscribe((data: {pageIndex: number, percentage: number}) => {
      this.subPagePercentages[data.pageIndex] = data.percentage;
      this.loadProgress();
    });
  }

  FilterJSONData(ev:any)
  {
    this.initializaJSONData();
    const val = ev.target.value;
    if(val && val.trim() != '')
      {
        this.categories = this.categories.map((category: Category) => {
          let filteredItems = category.items.filter((item: Item) => {
            return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
          });
          return {...category, items: filteredItems};
        }).filter((category: Category) => category.items.length > 0);
      }
  }

  initializaJSONData()
  {
    this.categories = [
      {
        title: 'Season 5',
        items: [
          { name: '哈巴谷書', link: '../habakkuk', testament: 'old' },
          { name: '西番雅書', link: '../zephaniah', testament: 'old' },
          { name: '哈該書', link: '../haggai', testament: 'old' },
          { name: '撒迦利亞書', link: '../zechariah', testament: 'old' },
        ]
      },
      {
        title: 'Season 6',
        items: [
          { name: '提摩太前書', link: '../timothy1', testament: 'new' },
        ]
      },
    ];
    this.subPagePercentages = Array(this.categories.reduce((acc, category) => acc + category.items.length, 0)).fill(0);
  }

  ngOnInit() {
    this.loadProgress();
    this.progressService.percentageUpdated.subscribe((newPercentage: number) => {
      this.percentage = newPercentage;
    });
    this.progressService.updateProgress();
  }


  loadProgress() {
    let oldTestamentCount = 0;
    let newTestamentCount = 0;
    let oldTestamentPercentage = 0;
    let newTestamentPercentage = 0;
    let completedOldTestamentSubPageCount = 0;
    let completedNewTestamentSubPageCount = 0;
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
          categoryPercentage += parseFloat(subPagePercentage) / this.categories[i].items.length;
        }
      }
      this.categoryPercentages[i] = parseFloat(categoryPercentage.toFixed(2));
      if (i === this.oldTestamentCategoryIndex) {
        const categoryOldTestamentTotalCount = categoryOldTestamentCount * 39;
        if (oldTestamentCount > 0) {
          const categoryCompletedOldTestamentCount = categoryOldTestamentCount * oldTestamentPercentage + categoryCompletedOldTestamentSubPageCount;
          oldTestamentPercentage = parseFloat((Math.min(categoryCompletedOldTestamentCount / categoryOldTestamentTotalCount * 100, 100)).toFixed(2));
        } else {
          oldTestamentPercentage = 0;
        }
      }
      if (i === this.newTestamentCategoryIndex) {
        const categoryNewTestamentTotalCount = categoryNewTestamentCount * 27;
        if (newTestamentCount > 0) {
          const categoryCompletedNewTestamentCount = categoryNewTestamentCount * newTestamentPercentage + categoryCompletedNewTestamentSubPageCount;
          newTestamentPercentage = parseFloat((Math.min(categoryCompletedNewTestamentCount / categoryNewTestamentTotalCount * 100, 100)).toFixed(2));
        } else {
          newTestamentPercentage = 0;
        }
      }
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
  }
  }
