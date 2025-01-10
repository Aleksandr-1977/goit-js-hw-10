import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

const timerInput = document.querySelector('#datetime-picker');
const btnTimerInput = document.querySelector('[data-start]');

let userSelectedDate = null;
let intervalBack = null;
btnTimerInput.disabled = true;

flatpickr(timerInput, {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
      btnTimerInput.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
        closeOnClick: true,
      });
    } else {
      btnTimerInput.disabled = false;
      iziToast.success({
        title: 'Success',
        message: 'Valid date selected!',
        position: 'topRight',
        closeOnClick: true,
      });
    }
    if (userSelectedDate > new Date()) {
      btnTimerInput.disabled = false;
    }
    console.log(userSelectedDate);
  },
});
