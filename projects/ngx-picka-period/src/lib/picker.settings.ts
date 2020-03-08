import {InjectionToken} from '@angular/core';

export const SETTINGS = {
  CONFIG_TOKEN: new InjectionToken<{}>('CONFIG_TOKEN'),
  VALUE_TOKEN: new InjectionToken<{}>('VALUE_TOKEN'),
  DATE_FORMAT: 'MM/DD/YYYY hh:mm',
  DATE_SEPARATOR: ' - ',
  PICKER: {
    HEIGHT: 380,
    WIDTH: 680,
    OFFSET: 10
  }
};
