import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import classNames from 'classnames';

// Реализуйте компонент <Collapse>, который по клику на ссылке отображает или скрывает свое содержимое. Если содержимое скрыто, то клик раскрывает его. И наоборот - если содержимое отображается, то клик скрывает контент. Содержимое передается в компонент через свойство text. За начальное состояние открытости, отвечает свойство opened, которое по умолчанию равно true.

class Collapse extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isShown: this.props.opened,
      }
    }
    handler = (event) => {
      event.preventDefault();
      this.setState(({ isShown }) => ({ isShown: !isShown }));
    }
  
    render() {
      const link = '#' 
      const classes = classNames('collapse', {
        'show': this.state.isShown,
      })
      return(
        <div>
          <p>
            <a
            onClick={this.handler}
            className="btn btn-primary" 
            data-bs-toggle="collapse" 
            href={link} role="button" 
            aria-expanded={this.state.isShown}>
              Link with href
            </a>
          </p>
  
            <div className={classes}>
              <div className="card card-body">
                {this.props.text}
             </div>
          </div>
        </div>
      )
    }
  }
  
  Collapse.defaultProps = {
    opened: true,
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(
    <React.StrictMode>
      <Collapse text={'collapse me'} opened={false}/>
    </React.StrictMode>
  );
  reportWebVitals();