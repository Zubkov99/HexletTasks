// Реализуйте функцию, которая принимает на вход начальное состояние, а возвращает store. Store должен обрабатывать действия перечисленные в addTask и removeTask.
// Структура состояния в store: { [task.id]: task, [task2.id]: task2 }.

import _ from 'lodash';
import redux from 'redux';

const { createStore } = redux;

const generateStore = (initState = {}) => {
    const reduser = (state = {}, action) => {
      switch (action.type) {
        case 'TASK_ADD': {
          const { id } = action.payload.task;
          return { ...state, [id]: action.payload.task };
        }
        case 'TASK_REMOVE': {
          const { id } = action.payload;
          return _.omit(state, id)
        }
        default:
          return state;
      }
    }
    return createStore(reduser, initState);
  }

const addTask = (task) => ({
    type: 'TASK_ADD',
    payload: {
      task,
    },
  });
  
const removeTask = (id) => ({
    type: 'TASK_REMOVE',
    payload: {
      id,
    },
  });
