import { Component } from '@angular/core';
import { ProgressService } from '../progress.service';

interface Category {
  title: string;
  items: Item[];
}

interface Item {
  name: string;
  link: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  subPageCount = 5; // 假設你有5個子頁面
  categories: Category[] = [];
  percentage = 0;

  constructor(private progressService: ProgressService) 
  {
    this.initializaJSONData();
  }

  FilterJSONData(ev:any) //搜尋filter
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

  initializaJSONData() //目錄
  {
    this.categories = [
      {
        title: 'Pentateuch',
        items: [
          { name: 'Genesis', link: '../genesis' },
          { name: 'Exodus', link: '../exodus' },
          { name: 'Levitivus', link: '../exodus' },
          { name: 'Numbers', link: '../exodus' },
          { name: 'Deuteronomy', link: '../exodus' },
        ]
      },
      {
        title: 'old testament history books',
        items: [
          { name: 'Joshua', link: '../exodus' },
          { name: 'Judges', link: '../exodus' },
          // ...
        ]
      },
    ]
  }

  ngOnInit() {
    this.loadProgress();
    this.progressService.percentageUpdated.subscribe((newPercentage: number) => {
      this.percentage = newPercentage;
    });
    this.progressService.updateProgress();
  }

  loadProgress() { //總百分比進度
    let totalPercentage = 0;
    for (let i = 0; i < this.subPageCount; i++) {
      const subPagePercentage = localStorage.getItem('subPagePercentage' + i);
      if (subPagePercentage) {
        totalPercentage += parseFloat(subPagePercentage);
      }
    }
    this.percentage = totalPercentage / this.subPageCount;
  }
}