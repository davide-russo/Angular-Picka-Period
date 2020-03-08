import {InjectionToken} from '@angular/core';

export const SETTINGS = {
  CONFIG_TOKEN: new InjectionToken<{}>('CONFIG_TOKEN'),
  PICKER: {
    HEIGHT: 380,
    WIDTH: 680,
    OFFSET: 10
  }
};
