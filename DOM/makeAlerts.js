// Изначально на странице есть одна кнопка. После клика на кнопку, в контейнер с классом alerts 
// добавляется алерт, с названием Alert 1. Последующий клик добавляет новый алерт сверху. 
// Каждый клик добавляет новый алерт, меняя число в его имени. 
// Реализуйте обработчик события click на кнопке в соответствии с логикой выше.


const makeAlert = () => {

    const button = document.querySelector('#alert-generator');
    const container = document.querySelector('.alerts');
  
    let counter = 1;
  
    const addAlert = () => {
      const div = document.createElement('div');
      container.prepend(div);
      div.textContent = `Alert ${counter}`;
      div.classList.add('alert', 'alert-primary');
      counter++;
    }
  
    button.addEventListener('click', addAlert);
  }
  makeAlert()