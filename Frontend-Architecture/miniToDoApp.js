// Реализуйте функцию, которая создает на странице TODO-приложение. Это приложение состоит из формы добавления (уже есть на странице) и списка задач добавленных через форму. Каждая новая задача выводится первой в списке добавленных ранее задач.
// У нашего TODO-приложения есть бэкенд. Этот бэкенд умеет получать новые задачи и возвращать список ранее добавленных задач.
// Во время инициализации (внутри функции), приложение должно делать запрос на сервер, извлекать оттуда уже добавленные задачи и выводить их на экран. Во время добавления новой задачи, приложение должно выполнять запрос на добавление задачи на сервер.

import axios from 'axios';

const routes = {
  tasksPath: () => '/api/tasks',
};

// first decision

const app = async () => {
  const form = document.querySelector('.form-inline');
  const input = form.querySelector('input');
  const ulList = document.querySelector('ul');
  input.focus();

  const addTasks = (tasks) => {
    ulList.innerHTML = '';
    tasks.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.textContent = item.name;
      ulList.append(li);
    })
  }

  const firstResponse = await axios.get(routes.tasksPath());
  addTasks(firstResponse.data.items)

  const handler = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const task = formData.get('name');
    await axios.post(routes.tasksPath(), { name: task })
    const response = await axios.get(routes.tasksPath());
    addTasks(response.data.items)
    input.focus();
    form.reset();
  };

  form.addEventListener('submit', handler)
}

//second decision

const render = (state, { form, input, tasksContainer }) => {
    form.reset();
    input.focus();
    const tasksElements = state.tasks.map((task) => {
      const el = document.createElement('li');
      el.classList.add('list-group-item');
      el.textContent = task.name;
      return el;
    });
  
    tasksContainer.replaceChildren(...tasksElements);
  };
  
  const app = async () => {
    const response = await axios.get(routes.tasksPath());
  
    const state = {
      tasks: response.data.items,
    };
  
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const tasksContainer = document.querySelector('#tasks');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = {
        name: formData.get('name'),
      };
      try {
        await axios.post(routes.tasksPath(), data);
        state.tasks.unshift(data);
      } catch (error) {
        console.error(error);
      }
  
      render(state, { form, input, tasksContainer });
    });
  
    render(state, { form, input, tasksContainer });
  };

