import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import update from 'immutability-helper';

const host = '';

const routes = {
  tasksPath: () => [host, 'tasks'].join('/'),
  finishTaskPath: (id) => [host, 'tasks', id, 'finish'].join('/'),
  activateTaskPath: (id) => [host, 'tasks', id, 'activate'].join('/'),
};


const FinishedItem = (props) => {
    const { items, reopen } = props;
    if(items.length === 0) return null;
  
    return (
      <div className='todo-finished-tasks'>
        {items.map(({ id, text }) => {
          return (
            <div className='row' key={id}>
              <div className='col-1'>{id}</div>
              <div className='col'>
                <s><a href="#" className="todo-task" onClick={reopen(id)}>{text}</a></s>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  
  const ActiveItems = (props) => {
    const { items, onFinish, } = props;
    if(items.length === 0) return null;
    return(
      <div className="todo-active-tasks">
        {items.map(({ id, text }) => {
          return (
            <div className='row' key={id}>
              <div className='col-1'>{id}</div>
              <div className='col'>
                <a href="#" className="todo-task" onClick={onFinish(id)}>{text}</a>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  
  const Item = (props) => {
    const { items, onFinish, reopen } = props;
    const finishedTasks = items.filter(({ state }) => state === 'finished');
    const activeTasks = items.filter(({ state }) => state === 'active');
  
    return (
      <>
        <ActiveItems items={activeTasks} onFinish={onFinish} />
        <FinishedItem items={finishedTasks} reopen={reopen} />
      </>
    )
  }


  class TodoBox extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        text: '',
        tasks: [],
      }
    }
  
    handleChange = (event) => {
      this.setState({ text: event.target.value })
    }
  
    handleSubmit = async (event) => {
      event.preventDefault();
      const { text } = this.state;
      const { data } = await axios.post(routes.tasksPath(), { "text": text });
      const newTasks = update(this.state.tasks, { $unshift: [data] });
      this.setState({
        text: '',
        tasks: [...newTasks]
      })
    }
  
    getContent = async () => {
      const request = await axios.get(routes.tasksPath());
      this.setState({ tasks: [...request.data] })
    }
  
    reopenTask = (elemId) => async () => {
      await axios.patch(routes.activateTaskPath(elemId));
      const index = this.state.tasks.findIndex(({ id }) => id === elemId);
      const newTasks = update([...this.state.tasks], { [index]: { $merge: { state: 'active' } } });
  
      this.setState({ tasks: [...newTasks] })
    }
  
    componentDidMount = () => {
      this.getContent()
    }
  
    handleFinished = (elemId) => async () => {
      const request = await axios.patch(routes.finishTaskPath(elemId));
  
      const index = this.state.tasks.findIndex(({ id }) => id === elemId);
  
      const newTasks = update([...this.state.tasks], { [index]: { $merge: { state: 'finished' } } });
  
      this.setState({ tasks: [...newTasks] })
    }
  
    render() {
      const { text } = this.state;
      return (
        <div>
          <div className="mb-3">
            <form className="todo-form mx-3" onSubmit={this.handleSubmit}>
              <div className="d-flex col-md-3">
                <input type="text" value={text} required className="form-control me-3" placeholder="I am going..."
                  onChange={this.handleChange}
                />
                <button type="submit" className="btn btn-primary">add</button>
              </div>
            </form>
          </div>
          < Item items={this.state.tasks} onFinish={this.handleFinished} reopen={this.reopenTask} />
        </div>
      )
    }
  }   