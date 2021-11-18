/* Video references for code in this project: */
/* 		1st video reference: https://youtu.be/akUcKvEsG8w */
/* 		2nd video reference: https://youtu.be/Rghqrp59XJA */
/* 		3rd video reference: https://youtu.be/0DnL5awucWE */
/* 		4th video reference: https://youtu.be/vWt9WvjUfRA */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
