const app = () => {
    const listConteiner = document.querySelector('[data-container="lists"]');
    const taskConteiner = document.querySelector('[data-container="tasks"]');
    const listUl = document.createElement('ul');
    const tasksUl = document.createElement('ul');
  
    listConteiner.append(listUl);
    let counterId = 1;
    const stateList = [
     {
       id: counterId,
       name: 'General',
       status: 'active',
     },
   ];
    const stateTasks = [];
  
    const renderaList = () => {
      listUl.innerHTML = '';
      stateList.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item.name;
      if (item.status === 'active') {
        li.innerHTML = `<b>${item.name}</b>`
      } else {
        li.innerHTML = `<a href="#general">${item.name}</a>`
      }
      listUl.append(li);
    })    
    }
  
    const renderTasks = () => {
      tasksUl.innerHTML = ''
      taskConteiner.append(tasksUl);
      const currentId = stateList.filter(item => item.status === 'active').pop().id;
      stateTasks.forEach(item => {
        if(item.id === currentId) {
          const li = document.createElement('li')
          li.textContent = item.name;
          tasksUl.append(li)
        }
      })
      if(tasksUl.children.length === 0) {
        taskConteiner.innerHTML = ''
      }
    }
  
    renderaList();
  
    const controller = () => {
      const listsInput = document.querySelector('[data-container="new-list-form"]');
      const tasksInput = document.querySelector('[data-container="new-task-form"]');
      const handlerList = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        const value = formData.get('name');
        stateList.push({id: ++counterId, name: value, status: 'inactive'});
        renderaList();
        event.target.reset();
      }
  
      const tasksList = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const value = formData.get('name');
        const currentId = stateList.filter(item => item.status === 'active').pop().id;
        stateTasks.push({id: currentId, name: value});
        renderTasks();
        event.target.reset();
      }
  
      listsInput.addEventListener('submit', handlerList);
      tasksInput.addEventListener('submit', tasksList)
  
      listUl.addEventListener('click', (event) => {
       const value = event.target.textContent;
       stateList.map(item => item.status = 'inactive');
       stateList.find(item => {
         if(item.name === value) {
          item.status = 'active'
         }
       })
       renderaList();
       renderTasks();
      })
    }
  
    controller()
  }
  app()