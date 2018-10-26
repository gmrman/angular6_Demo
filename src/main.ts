import { enableProdMode } from '@angular/core';//开发者环境
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//使用哪个模块启动应用

import { AppModule } from './app/app.module';//整个应用的主模块
import { environment } from './environments/environment';//环境配置，开发环境，正式环境

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

