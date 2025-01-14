import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

const timerInput = document.querySelector('#datetime-picker');
const btnTimerInput = document.querySelector('[data-start]');

let userSelectedDate = null;

btnTimerInput.disabled = true;
timerInput.disabled = false;

flatpickr(timerInput, {
  enableTime: true,
  timeout: 1000,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
      btnTimerInput.disabled = true;
      iziToast.error({
        title: 'Ошибка',
        message: 'Пожалуйста введите дату в будущем.',
        position: 'topRight',
        closeOnClick: true,
      });
    } else {
      btnTimerInput.disabled = false;
      iziToast.success({
        title: 'Успешно',
        message: 'Выбрана корректная дата!',
        position: 'topRight',
        closeOnClick: true,
      });
    }
  },
});
const timer = {
  intevalId: null,
  elements: {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  },
  start() {
    timerInput.disabled = true;
    btnTimerInput.disabled = true;
    this.intevalId = setInterval(() => {
      const ms = userSelectedDate - Date.now();
      if (ms <= 0) {
        this.stop();
        return;
      }

      const timeComponent = this.convertMs(ms);
      this.elements.days.textContent = this.addLeadingZero(timeComponent.days);
      this.elements.hours.textContent = this.addLeadingZero(
        timeComponent.hours
      );
      this.elements.minutes.textContent = this.addLeadingZero(
        timeComponent.minutes
      );
      this.elements.seconds.textContent = this.addLeadingZero(
        timeComponent.seconds
      );
    }, 1000);
  },
  stop() {
    clearInterval(this.intevalId);
    timerInput.disabled = false;
    iziToast.info({
      title: 'Готово',
      message: 'Вы можете установить новую дату!',
      position: 'topRight',
      closeOnClick: true,
    });
  },
  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  },
  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  },
};

btnTimerInput.addEventListener('click', () => {
  timer.start();
});
