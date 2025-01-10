import iziToast from 'izitoast';

const promiseForm = document.querySelector('.form');

promiseForm.addEventListener('submit', event => {
  event.preventDefault();
  const delayInput = promiseForm.delay.value;
  const stateCheck = promiseForm.state.value;

  makePromise(delayInput, stateCheck)
    .then(delay => {
      iziToast.success({
        title: 'Успешно',
        message: `Промис выполнен c задержкой в ${delay} мсек`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Ошибка',
        message: `Промис отклонен c задержкой в ${delay} мсек`,
        position: 'topRight',
      });
    });
  promiseForm.reset();
});
function makePromise(delayInput, stateCheck) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateCheck === 'fulfilled') {
        resolve(delayInput);
      } else {
        reject(delayInput);
      }
    }, delayInput);
  });
}
