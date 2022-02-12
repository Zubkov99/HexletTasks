// В Bootstrap есть компонент nav (Обязательно перейдите по ссылке и покликайте по нему). 
// Один из вариантов этого компонента — это табы, которые переключаются, по нажатию, без перезагрузки страницы.
// По клику на таб происходит следующее:

// Класс active снимается с текущего элемента меню и активного блока с данными.
// Класс active добавляется табу, по которому кликнули и соответствующему блоку с данными.
// Сопоставление таба и блока данных идёт по идентификатору, который прописывается в атрибут data-bs-target табов. 
// По клику на таб, код должен извлечь id, найти соответствующий элемент и сделать его активным, не забыв при этом снять 
// класс active с таба и блока, которые были активными до клика.

const useTabs = () => {
    const firstTabConteiner = document.querySelector('#user-tab');
    const firstTabs = document.querySelectorAll('[data-bs-toggle="tab"]');
    const firstContent = document.querySelectorAll('#user-tabContent [role="tabpanel"]');
    const secondTabConteinet = document.querySelector('#appTab');
    const secondTabs = document.querySelectorAll('[data-bs-toggle="pill"]')
    const secondContent = document.querySelectorAll('.mt-5 [role="tabpanel"]');
  
    const eventFunc = (tabs, content, target, count) => {
      const contetnId = getContentId(target.id, count);
      tabs.forEach(item => item.classList.remove('active'));
      content.forEach(item => item.classList.remove('active'));
      target.classList.add('active');
      document.getElementById(contetnId).classList.add('active')
  
      target.classList.add('active');
      document.getElementById(contetnId).classList.add('active')
  
    }
  
    const getContentId = (id, count) => {
      return id.split('-')
      .filter((item, index) => index < count )
      .join('-');
    }
  
    firstTabConteiner.addEventListener('click', (event) => {
      eventFunc(firstTabs, firstContent, event.target, 2)
    })
  
    secondTabConteinet.addEventListener('click', (event) => {
      eventFunc(secondTabs, secondContent, event.target, 1)
    })
  }
  
  useTabs()