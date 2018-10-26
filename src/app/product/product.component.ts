import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products=[
      new Product(1,"商品一",5.99,5,"1如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助",["电子产品","电脑"]),
      new Product(1,"商品二",5.99,3,"2如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助",["水果","电脑"]),
      new Product(1,"商品三",5.99,2.5,"3如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助",["电子产品","键盘"]),
      new Product(1,"商品四",5.99,4,"4如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助",["药品","电脑"]),
      new Product(1,"商品五",5.99,1,"5如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助",["外卖","电脑"]),
      new Product(1,"商品六",5.99,3.5,"6如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助",["电子产品","屏幕"])
    ];
  }

}
export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ) { }
}
