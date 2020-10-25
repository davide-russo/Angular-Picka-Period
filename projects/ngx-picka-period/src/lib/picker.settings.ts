import {InjectionToken} from '@angular/core';

export const SETTINGS = {
  CONFIG_TOKEN: new InjectionToken<{}>('CONFIG_TOKEN'),
  VALUE_TOKEN: new InjectionToken<{}>('VALUE_TOKEN'),
  RANGE_SELECTION_TOKEN: new InjectionToken<{}>('RANGE_SELECTION_TOKEN'),
  DATE_FORMAT: 'MM/DD/YYYY HH:mm',
  DATE_SEPARATOR: ' - ',
  RANGE_PICKER: {
    HEIGHT: 374,
    WIDTH: 680,
    OFFSET: 10
  },
  SINGLE_PICKER: {
    HEIGHT: 374,
    WIDTH: 256,
    OFFSET: 10
  }
};
