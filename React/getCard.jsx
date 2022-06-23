// Реализуйте функцию, которая принимает на вход объект со свойствами title и text, и возвращает jsx с подставленными значениями. Пример:
// Если title отсутствует, то соответствующий ему кусок dom не отрисовывается, то же самое справедливо и для text. Если отсутствуют оба свойства, то из функции необходимо вернуть null.

import React from "react";

const getCard = ({title, text}) => {
    const card = (
      <div className="card">
        <div className="card-body">
          { title ? <h4 className="card-title">{title}</h4> : null }
          { text ? <p className="card-text">{text}</p> : null }
        </div>
      </div>
    )
    return title != null || text != null ? card : null
  }
  
  class Card extends React.Component {
    render() {
     return getCard({ title: 'hi'})
    }
  }