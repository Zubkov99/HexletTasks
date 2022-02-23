// Некоторые интерфейсы допускают редактирование "по месту" (in-place). Это значит, что для обновления значений каких-то данных не нужно переходить на отдельную страницу редактирования, достаточно кликнуть на сам элемент (или кнопку рядом с ним) как появится форма для изменения конкретно этого значения.
// В данной практике нужно построить именно такой интерфейс. Он работает по следующему принципу. Контейнер внутри которого находятся данные для редактирования, помечается специальным аттрибутом: data-editable-target. Значением этого атрибута является имя поля. В нашем примере это name и email (исходник доступен в public/index.html). Начальный HTML выглядит так:
// <div data-editable-target="name"><i>name</i></div>
// <div data-editable-target="email"><i>email</i></div>
// Когда происходит клик на этом элементе, то он заменяется на форму:
// Затем пользователь может изменить значение и сохранить его. Повторный клик снова открывает форму для редактирования, в которой окажется то значение, которое вбил пользователь.
// Если значение стирается, то тогда текст меняется на первоначальный (и добавляется курсив), такой какой он был до любых изменений:


const app = () => {

    const name = document.querySelector('[data-editable-target="name"]');
    const email = document.querySelector('[data-editable-target="email"]');
  
    const state = {
      firstData: {
        name: name.textContent.trim(),
        email: email.textContent.trim(),
      },
      nextData: {
  
      },
      processing: {
        name: {
          status: 'start'
        },
        email: {
          status: 'start'
        }
        
      }
    };
  
    const renderForm = (element, attribute) => {   
        element.innerHTML = '';
        const form = document.createElement('form');
        const firstInput = document.createElement('input');
        const secondInput = document.createElement('input');
        firstInput.setAttribute('type', 'text');
        firstInput.setAttribute('name', attribute);
        firstInput.setAttribute('value', '');
        secondInput.setAttribute('type', 'submit');
        secondInput.setAttribute('value', 'Save');
        form.append(firstInput);
        form.append(secondInput);
        element.append(form);
        firstInput.focus();
        state.processing[attribute].status = 'edit';
    };
  
    const renderNewText = (value, element, attribute) => {
      if(state.nextData[attribute].length === 0 ) {
        element.innerHTML = `<i>${state.firstData[attribute]}</i>`
        return;
      }
      element.innerHTML = value;
    }
  
    const render = (element) => {
      const attribute = element.getAttribute('data-editable-target');
  
      if(state.processing[attribute].status === 'start') {
        renderForm(element, attribute);
      };
      if(state.processing[attribute].status === 'edit') {
        const form = document.querySelector('form');
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const value = formData.get(attribute);        
          state.nextData[attribute] = value;
          renderNewText(value, element, attribute)
          state.processing[attribute].status = 'start';
          event.stopImmediatePropagation()
        })
      }
    }
  
    const controller =  () => {
      name.addEventListener('click', (event) => {
        render(name);
      }, true)
      email.addEventListener('click', (event) => {
        render(email)
      })
    }
  
    controller()
  }

  app()