import { startDate } from '../common/config';
import { monthYearFormatter } from '../common/date-time-utils';

let dateReadOut = null;

export function initDateReadOut() {
  dateReadOut = document.querySelector('.date-read-out');
  dateReadOut.innerHTML = monthYearFormatter(startDate);
}

export function updateDateReadOut(value) {
  dateReadOut.innerHTML = value;
}

export default dateReadOut;
