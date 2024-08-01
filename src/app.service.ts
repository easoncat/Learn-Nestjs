import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getLogin(): string {
    return 'login status'
  }

  getChartData(): Object {
    let list = []
    for(let i=0; i<7; i++) {
      list.push({
        "apple": Math.floor(Math.random()*(8000-100)+100),
        "vivo": Math.floor(Math.random()*(8000-100)+100),
        "oppo": Math.floor(Math.random()*(8000-100)+100),
        "魅族": Math.floor(Math.random()*(8000-100)+100),
        "三星": Math.floor(Math.random()*(8000-100)+100),
        "小米": Math.floor(Math.random()*(8000-100)+100)
      })
    }

    return {
      code: 200,
      data: {
        // 饼图
        "videoData": [
          {
            name: "小米",
            value: 2999
          },
          {
            name: "apple",
            value: 5999
          },
          {
            name: "vivo",
            value: 1500
          },
          {
            name: "oppo",
            value: 1999
          },
          {
            name: "魅族",
            value: 2200
          },
          {
            name: "三星",
            value: 4500
          },
        ],
        // 柱状图
        "userData": [
          {
            date: '周一',
            new: 5,
            active: 200
          },
          {
            date: '周二',
            new: 10,
            active: 500
          },
          {
            date: '周三',
            new: 12,
            active: 550
          },
          {
            date: '周四',
            new: 60,
            active: 800
          },
          {
            date: '周五',
            new: 65,
            active: 550
          },
          {
            date: '周六',
            new: 53,
            active: 770
          },
          {
            date: '周日',
            new: 33,
            active: 170
          }
        ],
        // 折线图
        "orderData": {
            date: ["20241001", "20241002", "20241003", "20241004", "20241005", "20241006", "20241007"],
            data: list
        },
        tableData: [
          {
            name: "apple",
            todayBuy: 800,
            monthBuy: 4500,
            totalBuy: 65000
          },
          {
            name: "三星",
            todayBuy: 300,
            monthBuy: 2000,
            totalBuy: 34000
          },
          {
            name: "oppo",
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000
          },
          {
            name: "vivo",
            todayBuy: 300,
            monthBuy: 2200,
            totalBuy: 24000
          },
          
          {
            name: "小米",
            todayBuy: 1200,
            monthBuy: 6500,
            totalBuy: 45000
          },
          {
            name: "魅族",
            todayBuy: 350,
            monthBuy: 3000,
            totalBuy: 22000
          }
        ]
      }
    }
  }
}
