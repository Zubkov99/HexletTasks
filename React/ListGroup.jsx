// Реализуйте компонент ListGroup, который отрисовывает переданных детей, оборачивая их в список.
import React from 'react';
import ReactDOM from 'react-dom/client';


class ListGroup extends React.Component {
    render() {
      const { children } = this.props;
      return (
        <ul className='list-group'>
          { React.Children.map(children, (item) => <li className='list-group-item'>{item}</li>)}
        </ul>
      )
    }
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
    <ListGroup>
    <p>one</p>
    <p>two</p>
  </ListGroup>
  
    </React.StrictMode>
  );