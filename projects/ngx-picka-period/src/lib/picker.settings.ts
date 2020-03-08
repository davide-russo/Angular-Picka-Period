import {InjectionToken} from '@angular/core';

export const SETTINGS = {
  CONFIG_TOKEN: new InjectionToken<{}>('CONFIG_TOKEN'),
  PICKER: {
    HEIGHT: 376,
    WIDTH: 680
  }
};
