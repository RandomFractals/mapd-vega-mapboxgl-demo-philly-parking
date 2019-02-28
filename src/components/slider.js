import throttle from 'lodash.throttle';
import dispatcher from '../common/dispatcher';
import {
  monthCount,
  timeFormatter,
  timeScale
} from '../common/date-time-utils';

let slider = null;
const WAIT_TIME_MS = 100;

function handleInput(event) {
  console.log(timeFormatter(timeScale.invert(event.target.value)));
  dispatcher.call(
    'sliderInput',
    null,
    timeScale.invert(event.target.value)
  );
}

export function updateSliderPosition(value) {
  slider.value = value.toString();
  dispatcher.call(
    'sliderInput',
    null,
    timeScale.invert(value)
  );
}

export function getValue() {
  return Number(slider.value);
}

export function initSlider() {
  slider = document.querySelector('input.slider');
  slider.setAttribute('max', monthCount);
  slider.addEventListener('input', throttle(handleInput, WAIT_TIME_MS, { leading: true }));
  return slider;
}
