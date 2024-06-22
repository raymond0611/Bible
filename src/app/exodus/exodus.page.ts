import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-exodus',
  templateUrl: './exodus.page.html',
  styleUrls: ['./exodus.page.scss'],
})
export class ExodusPage implements OnInit {

  percentage = 0;
  buttonCount = 40; // 假設你有40個按鈕
  increment = 100 / this.buttonCount; //100除以每一個按鈕的數量
  buttonStates = Array(this.buttonCount).fill(false); // 初始化按鈕狀態為false
  pageIndex = 1; // 假設這是第一個子頁面

  constructor(private progressService: ProgressService) { }

  onButtonClick(index: number) {
    this.buttonStates[index] = !this.buttonStates[index];
    this.percentage = parseFloat((this.buttonStates.filter(state => state).length / this.buttonCount * 100).toFixed(2)); //限制百分比為兩位小數
    this.saveState();
  }

  saveState() {
    localStorage.setItem('buttonStates', JSON.stringify(this.buttonStates));
    localStorage.setItem('percentage', this.percentage.toString());
    localStorage.setItem('subPagePercentage' + this.pageIndex, this.percentage.toString()); // 儲存子頁面的百分比
    this.progressService.updateProgress(); // 更新主頁面的進度
  }

  loadState() {
    const buttonStates = localStorage.getItem('buttonStates');
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