// Реализуйте компонент BtnGroup, который отрисовывает две кнопки. Нажатие на любую из кнопок делает её активной, а другую неактивной. При первой загрузке ни одна из кнопок не нажата.

import cn from 'classnames';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const BtnGroup = () => {

    const [buttons, getActive] = useState({
      leftButton: '',
      rightButton: '',
    })
   
    const leftButtonClasses = cn('btn', 'btn-secondary', 'left', {
      "active": buttons.leftButton
    });
    const rightButtonClasses = cn('btn', 'btn-secondary', 'right', {
      "active": buttons.rightButton
    });
  
    return (
      <div className="btn-group" role="group">
        <button type="button" className={leftButtonClasses} 
        onClick={() => getActive({ leftButton: 'active', rightButton: ''})}>Left</button>
        
        <button type="button" className={rightButtonClasses} 
        onClick={() => getActive({ leftButton: '', rightButton: 'active' })}>
        Right</button>
      </div>
    )
  };

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
root.render(<BtnGroup />);
