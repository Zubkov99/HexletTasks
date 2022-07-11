import classnames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Реализуйте компонент <Modal> (Модальное окно)

const Header = (props) => {
  return(
    <div className='modal-header'>
      <div className='modal-title' onClick={props.toggle}>{props.children}</div>
      <button className='btn-close' type="button" data-bs-dismiss="modal" aria-label="Close" onClick={props.toggle} />
    </div>
  )
};
const Body = (props) => <div className='modal-body'>{props.children}</div>;
const Footer = (props) => <div className='modal-foote'>{props.children}</div>;

class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const { isOpen } = this.props;

    const classes = classnames('modal', {
      'fade': isOpen,
      'show': isOpen,
    });

    const styleList = {
      'display': !isOpen ? 'none' : 'block'
    }
    return (
      <div className={classes} role="dialog" style={styleList}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }

  toggle = () => {
    console.log('pressed')
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  render() {
    const { modal } = this.state;
    console.log(modal)
    return (
      <div>
        <button type="button" className="btn btn-danger" onClick={this.toggle}>Open</button>
        <Modal isOpen={modal}>
          <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="modal-close-button btn btn-secondary" onClick={this.toggle}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<Component />);