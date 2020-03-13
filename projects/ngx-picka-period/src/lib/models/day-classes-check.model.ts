import {Moment} from 'moment';

export interface DayClassesCheck {
  classes: string[];
  check: (day: Moment) => boolean;
}
