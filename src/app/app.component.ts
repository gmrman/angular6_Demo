import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//显示在app-root这个标签中
  templateUrl: './app.component.html',//模板页面
  styleUrls: ['./app.component.css']//模板样式
})
//@inputs()输入属性，可以允许传递数据
//prividers提供器，依赖注入
//lifecycle hooks生命周期钩子，生命周期(初始化时，加载后，销毁前)中的事件
//@outputs主键间共享数据
export class AppComponent {
  title = 'A6test';
}
