class Card extends React.Component {
    render() {
      const { title, text } = this.props;
      return (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{text}</p>
          </div>
        </div>
      );
    }
  }
  
  Card.defaultProps = {
    title: 'title',
    text: 'text',
  };