import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideStoreDevtools({
      autoPause: true,
      logOnly: !isDevMode(),
      maxAge: 25,
      trace: false,
      traceLimit: 75,
    }),
  ],
};
