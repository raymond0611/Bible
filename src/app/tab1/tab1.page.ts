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
  oldTestamentPercentage: number | null = null;
  newTestamentPercentage: number | null = null;
  oldTestamentCategoryIndex = 0;
  newTestamentCategoryIndex = 0;
 

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
        title: 'Y1S1',
        items: 
        [
          { name: '馬太福音', link: '../matthew', testament: 'new' },
        ]
      },
      {
        title: 'Y1S2',
        items: 
        [
          { name: '馬可福音', link: '../mark', testament: 'new' },
          { name: '彼得前書', link: '../peter1', testament: 'new' },
          { name: '彼得後書', link: '../peter2', testament: 'new' },
        ]
      },
      {
        title: 'Y1S3',
        items: 
        [
          { name: '路加福音', link: '../luke', testament: 'new' },
          { name: '使徒行傳', link: '../acts', testament: 'new' },
        ]
      },
      {
        title: 'Y1S4',
        items: 
        [
          { name: '約翰福音', link: '../john', testament: 'new' },
          { name: '約翰一書', link: '../john1', testament: 'new' },
          { name: '約翰二書', link: '../john2', testament: 'new' },
          { name: '約翰三書', link: '../john3', testament: 'new' },
        ]
      },
      {
        title: 'Y1S5',
        items: 
        [
          { name: '啟示錄', link: '../revelation', testament: 'new' },
        ]
      },
      {
        title: 'Y1S6',
        items: 
        [
          { name: '哥林多前書', link: '../corinthians', testament: 'new' },
          { name: '哥林多後書', link: '../corinthians2', testament: 'new' },
          { name: '加拉太書', link: '../galatians', testament: 'new' },
          { name: '以弗所書', link: '../ephesians', testament: 'new' },
          { name: '腓力比書', link: '../philippians', testament: 'new' },
          { name: '歌羅西書', link: '../colossians', testament: 'new' },
          { name: '帖撒羅尼迦前書', link: '../thessalonians1', testament: 'new' },
          { name: '帖撒羅尼迦後書', link: '../thessalonians2', testament: 'new' },
        ]
      },
      {
        title: 'Y1S7',
        items: 
        [
          { name: '羅馬書', link: '../romans', testament: 'new' },
          { name: '提摩太前書', link: '../timothy1', testament: 'new' },
          { name: '提摩太後書', link: '../timothy2', testament: 'new' },
          { name: '提多書', link: '../titus', testament: 'new' },
          { name: '腓利門書', link: '../philemon', testament: 'new' },
          { name: '希伯來書', link: '../hebrews', testament: 'new' },
          { name: '雅各書', link: '../james', testament: 'new' },
          { name: '猶大書', link: '../jude', testament: 'new' },
        ]
      },
      {
        title: 'Y4S5',
        items: 
        [
          { name: '哈巴谷書', link: '../habakkuk', testament: 'old' },
          { name: '西番雅書', link: '../zephaniah', testament: 'old' },
          { name: '哈該書', link: '../haggai', testament: 'old' },
          { name: '撒迦利亞書', link: '../zechariah', testament: 'old' },
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
    this.oldTestamentCategoryIndex = this.categories.findIndex(category => category.title === 'Y4S5');
    this.newTestamentCategoryIndex = this.categories.findIndex(category => category.title === 'Y1S1');
    const oldTestamentSubPageCount = this.categories[this.oldTestamentCategoryIndex].items.length * 39;
    const newTestamentSubPageCount = this.categories[this.newTestamentCategoryIndex].items.length * 27;
    this.oldTestamentPercentage = null;
    this.newTestamentPercentage = null;
    if (oldTestamentSubPageCount > 0) {
      this.oldTestamentPercentage = 0;
    }
    if (newTestamentSubPageCount > 0) {
      this.newTestamentPercentage = 0;
    }
  }


  loadProgress() {
    let oldTestamentCount = 0;
    let newTestamentCount = 0;
    let oldTestamentPercentage = this.oldTestamentPercentage ?? 0;
    let newTestamentPercentage = this.newTestamentPercentage ?? 0;
    let completedOldTestamentSubPageCount = 0;
    let completedNewTestamentSubPageCount = 0;
    let completedCategoryOldTestamentSubPageCount = 0;
    let completedCategoryNewTestamentSubPageCount = 0;
    for (let i = 0; i < this.categories.length; i++) {
      let completedCategorySubPageCount = 0;
      let categoryOldTestamentCount = 0;
      let categoryNewTestamentCount = 0;
      let categoryCompletedOldTestamentSubPageCount = 0;
      let categoryCompletedNewTestamentSubPageCount = 0;
      for (let j = 0; j < this.categories[i].items.length; j++) {
        let subPageIndex = this.categories.slice(0, i).reduce((acc, category) => acc + category.items.length, 0) + j;
        const subPagePercentage = localStorage.getItem('subPagePercentage' + subPageIndex);
        if (subPagePercentage) {
          this.subPagePercentages[subPageIndex] = parseFloat(subPagePercentage);
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
          completedCategorySubPageCount += parseFloat(subPagePercentage) === 100 ? 1 : 0;
        } else {
          this.subPagePercentages[subPageIndex] = 0;
        }
      }
      const completedCategoryPercentage = completedCategorySubPageCount / this.categories[i].items.length * 100;
      this.categoryPercentages[i] = parseFloat(completedCategoryPercentage.toFixed(2));
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
    }
    if (oldTestamentCount === 0 || isNaN(oldTestamentPercentage)) {
      oldTestamentPercentage = 0;
    }
    if (newTestamentCount === 0 || isNaN(newTestamentPercentage)) {
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
  }
} 