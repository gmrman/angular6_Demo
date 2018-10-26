// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.css']
// })
// export class TestComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <nz-carousel nzAutoPlay>
      <div nz-carousel-content *ngFor="let index of array"><img [src]="index.src" alt=""/></div>
    </nz-carousel>`,
  styles  : [
      `[nz-carousel-content] {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      color: #fff;
      overflow: hidden;
    }

    h3 {
      color: #fff;
    }
    `
  ]
})
export class TestComponent {
  array = [ 
    {id:1,src:"src/app/images/1.jpg"},
    {id:2,src:"src/app/images/2.jpg"},
    {id:3,src:"src/app/images/3.jpg"},
    {id:4,src:"src/app/images/4.jpg"}
  ];
}


