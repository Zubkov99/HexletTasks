import { htmlEscape } from 'escape-goat';
// В задании дана форма обратной связи, состоящая из трех полей: email, name и comment. 
// Напишите и экспортируйте функцию по умолчанию, которая при отправке формы получает из неё 
// данные и экранирует их. Когда форма заполнена и "отправлена" (нажата кнопка send), то вместо 
// формы появляется документ с такой структурой:
// <div>
//   <p>Feedback has been sent</p>
//   <div>Email: test@email.com</div>
//   <div>Name: Matz</div>
//   <div>Comment: My Comment</div>
// </div>


const getFeedback = () => {
  const form = document.querySelector('.feedback-form');
  const postHtml = (email, name, comment) => {
    form.innerHTML = `<div>
    <p>Feedback has been sent</p>
    <div>Email: ${htmlEscape(email)}</div>
    <div>Name: ${htmlEscape(name)}</div>
    <div>Comment: ${htmlEscape(comment)}</div>
  </div>`;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObj = Object.fromEntries(formData);
    const { comment, email, name } = formObj;
    postHtml(email, name, comment)
  })
}