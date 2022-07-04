import React from 'react';
import _ from 'lodash';

// Реализуйте компонент, который представляет собой две кнопки и лог событий:
// Лог — это список значений, каждое из которых получается после нажатия на одну из двух кнопок. Снизу находятся более старые события, сверху новые.
// Левая кнопка + добавляет в лог строчку с новым значением равным: значение "самой новой существующей записи лога" + 1
// Правая кнопка - добавляет в лог строчку с новым значением равным: значение "самой новой существующей записи лога" - 1 При клике на запись в логе она удаляется.

class Component extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [] };
    }
  
    handleCount = (value) => {
      const { items } = this.state;
      const currentValue = _.get(items, [0, 'value'], 0) + value;
      const current = { id: _.uniqueId(), value: currentValue };
      this.setState({ items: [current, ...items] });
    }
  
    handleDec = () => this.handleCount(-1);
  
    handleInc = () => this.handleCount(1);
  
    handleRemove = (currentId) => () => {
      const { items } = this.state;
      this.setState({ items: items.filter(({ id }) => id !== currentId) });
    }
  
    renderLog() {
      const { items } = this.state;
      if (items.length === 0) {
        return null;
      }
      return (
        <div className="list-group">
          {items.map(({ id, value }) => (
            <button type="button" className="list-group-item list-group-item-action" key={id} onClick={this.handleRemove(id)}>
              {value}
            </button>
          ))}
        </div>
      );
    }
  
    render() {
      return (
        <div>
          <div className="btn-group font-monospace" role="group">
            <button type="button" className="btn btn-outline-success" onClick={this.handleInc}>+</button>
            <button type="button" className="btn btn-outline-danger" onClick={this.handleDec}>-</button>
          </div>
          {this.renderLog()}
        </div>
      );
    }
  }