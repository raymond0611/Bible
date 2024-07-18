import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-thessalonians1',
  templateUrl: './thessalonians1.page.html',
  styleUrls: ['./thessalonians1.page.scss'],
})
export class Thessalonians1Page implements OnInit {

  percentage = 0;
  buttonCount = 5; // 假設你有50個按鈕
  increment = 100 / this.buttonCount; //100除以每一個按鈕的數量
  buttonStates = Array(this.buttonCount).fill(false); // 初始化按鈕狀態為false
  pageIndex = 17; // 假設這是第一個子頁面
  testament: 'old' | 'new' = 'new'; // 新增一個屬性來表示該子頁面是新約還是舊約，並初始化為 'old'
  oldTestamentPercentage = 0; // 新增一個屬性來保存舊約的百分比，並初始化為 0
  newTestamentPercentage = 0; // 新增一個屬性來保存新約的百分比，並初始化為 0

  constructor(private progressService: ProgressService) {
    this.pageIndex = 17; // 設置子頁面的索引
    const link = window.location.href;
    if (link.includes('old')) {
      this.testament = 'old';
    } else if (link.includes('new')) {
      this.testament = 'new';
    }
  }

  onButtonClick(index: number) {
    this.buttonStates[index] = !this.buttonStates[index];
    this.percentage = parseFloat((this.buttonStates.filter(state => state).length / this.buttonCount * 100).toFixed(2)); //限制百分比為兩位小數
    this.saveState();
  }

  saveState() {
    localStorage.setItem('buttonStates' + this.pageIndex, JSON.stringify(this.buttonStates));
    localStorage.setItem('percentage', this.percentage.toString());
    localStorage.setItem('subPagePercentage' + this.pageIndex, this.percentage.toString()); // 儲存子頁面的百分比
    this.progressService.subPagePercentageUpdated.emit({pageIndex: this.pageIndex, percentage: this.percentage}); // 更新主頁面的進度
    if (this.testament === 'old') {
      this.oldTestamentPercentage = this.percentage; // 更新舊約的百分比
    } else if (this.testament === 'new') {
      this.newTestamentPercentage = this.percentage; // 更新新約的百分比
    }
  }

  loadState() {
    const buttonStates = localStorage.getItem('buttonStates' + this.pageIndex);
    const percentage = localStorage.getItem('percentage');
    if (buttonStates) {
      this.buttonStates = JSON.parse(buttonStates);
    }
    if (percentage) {
      this.percentage = parseFloat(percentage);
    }
  }

  reset() {
    this.percentage = 0;
    this.buttonStates.fill(false);
    this.saveState();
  }

  ngOnInit() {
    this.loadState();
  }

}
