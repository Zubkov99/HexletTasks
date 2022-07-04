import React from 'react';
import _ from 'lodash';
// Реализуйте простой Todo, с возможностью добавлять и удалять заметки.

class Item extends React.Component {

    render() {
      const {task, onRemove } = this.props;
      if(task.length === 0) return null;
      return(
        <>
        {task.map(({item, id}) => {
         return (
         <div key={id}>
        <div className="row">
        <div className="col-auto">
          <button type="button" className="btn btn-primary btn-sm" onClick={onRemove(id)}>-</button>
        </div>
        <div className="col">{item}</div>
         </div>
        <hr/>
      </div>)
        })}
        </>
      )
    }
  }
  
  class TodoBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentText: '',
        tasks: [],
      }
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      const { currentText } = this.state;
      const { tasks } = this.state;
      const newItem = {
        item: currentText,
        id: _.uniqueId(),
      }
      this.setState({
        tasks: [newItem, ...tasks],
        currentText: ''
      })
    }
  
    handleChange = (event) => {
      this.setState({currentText: event.target.value})
    }
  
    removeItem = (current_id) => (event) => {
      const { tasks } = this.state;
      event.preventDefault();
      const newItems = tasks.filter(({id}) => id !== current_id);
      this.setState({tasks: [...newItems]})
    }
  
    render() {
      return (
        <div>
          <div className='mb-3'>
            <form className='d-flex' onSubmit={this.handleSubmit}>
              <div className='me-3'>
                <input type="text" value={this.state.currentText} required="" className='form-control' onChange={this.handleChange} placeholder="I am going..."/>
              </div>
                <button type="submit" className="btn btn-primary">
                  add
                </button>
            </form>
          </div>
          <Item task={this.state.tasks} onRemove={this.removeItem}/>
        </div>
      )
    }
  }

