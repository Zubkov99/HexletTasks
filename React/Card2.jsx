import React from 'react';
import ReactDOM from 'react-dom/client';
// Реализуйте компонент <Card> с помощью функциональных компонентов

const Title = (props) => <h4 className="card-title">{props.children}</h4>
const Body = (props) => <div className='card-body'>{props.children}</div>;
const Text = (props) => <p className='card-text'>{props.children}</p>

class Card extends React.Component {
  static Title = Title;
  static Body = Body;
  static Text = Text;

  render() {

    const { children } = this.props;
    return(
      <div className='card'>
      {children}
      </div>
    )
  }
}

const dom = (
    <Card>
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>Text</Card.Text>
      </Card.Body>
    </Card>
  );
  
  const root = ReactDOM.createRoot(document.getElementById('container'));
  root.render(dom);
  