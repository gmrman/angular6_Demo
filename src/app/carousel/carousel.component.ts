import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  array = [ 
    {id:1,src:"src/app/images/1.jpg"},
    {id:2,src:"src/app/images/2.jpg"},
    {id:3,src:"src/app/images/3.jpg"},
    {id:4,src:"src/app/images/4.jpg"}
  ];

}
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-carousel',
//   template: `
//     <nz-carousel nzAutoPlay>
//       <div nz-carousel-content *ngFor="let index of array"><h3>{{index}}</h3></div>
//     </nz-carousel>`,
//   styles  : [
//       `[nz-carousel-content] {
//       text-align: center;
//       height: 160px;
//       line-height: 160px;
//       background: #364d79;
//       color: #fff;
//       overflow: hidden;
//     }

//     h3 {
//       color: #fff;
//     }
//     `
//   ]
// })
// export class CarouselComponent {
//   array = [ 1, 2, 3, 4 ];
// }


