// В веб-разработке есть такое понятие как всплывающие окна Pop-Up. Их использование может быть очень разным, это могут быть всплывающие подсказки или даже элементы меню. В этом задании вам нужно реализовать форму регистрации, при наведении курсора на поле, должно всплывать окно с описанием поля. Для всплывающих окон используйте библиотеку reactjs-popup.Каждое поле в форме должно иметь label, текст всплывающей подсказки содержится в description.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Form, Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';

const fields = [
    {
      id: 'firstName',
      title: 'Имя',
      type: 'text',
      description: 'Ваше имя',
    },
    {
      id: 'lastName',
      title: 'Фамилия',
      type: 'text',
      description: 'Ваша фамилия',
    },
    {
      id: 'email',
      title: 'Email',
      type: 'email',
      description: 'Ваш email',
    },
    {
      id: 'password',
      title: 'Пароль',
      type: 'password',
      description: 'Придумайте надёжный пароль',
    },
  ];


const FormElements = () => {
    return (
        <Form>
          {fields.map(({ id, title, type, description }) => {
            return (
              <Popup
                key={`tp-${id}`}
                trigger={
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor={id}>{title}</Form.Label>
                    <Form.Control type={type} id={id}></Form.Control>
                  </Form.Group>
                }
                on={['hover', 'focus']}
                position={'right center'}
              >
                {description}
              </Popup>
            )
          })}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
    )
  }
  
  class Registration extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
  
        <div id="container" className="container m-3">
          <div className="col-5">
            <h1 className="my-4">Регистрация</h1>
            <FormElements />
          </div>
        </div>
      );
    }
  };

  const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
