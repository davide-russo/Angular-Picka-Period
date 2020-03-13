import {InjectionToken} from '@angular/core';

export const SETTINGS = {
  CONFIG_TOKEN: new InjectionToken<{}>('CONFIG_TOKEN'),
  PERIOD_TOKEN: new InjectionToken<{}>('PERIOD_TOKEN'),
  DATE_FORMAT: 'MM/DD/YYYY HH:mm',
  DATE_SEPARATOR: ' - ',
  PICKER: {
    HEIGHT: 374,
    WIDTH: 680,
    OFFSET: 10
  }
};
