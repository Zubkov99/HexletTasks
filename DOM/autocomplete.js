// Задача этого упражнения состоит в том, чтобы реализовать автокомплит. На странице присутствуют элементы input, с аттрибутами data-autocomplete и data-autocomplete-name, к которым нужно привязаться. Атрибут data-autocomplete содержит ссылку, по которой нужно делать запрос на данные. Атрибут data-autocomplete-name содержит имя, по которому необходимо найти на странице список ul с точно таким же аттрибутом и значением. В этом списке выводятся данные.
// При изменнии строки в поле ввода (ввод символов или их удаление), необходимо выполнить запрос на сервер с query-параметром term, значением которого будет строка введенная в input. Сервер возвращает массив из стран (на английском языке).

// Если этот массив не пустой, то нужно заполнить список (посмотреть его нахождение можно либо через public/index.html либо открыв исходный код страницы в веб доступе) таким образом:
// <ul data-autocomplete-name="country">
//   <li>pakistan</li>
//   <li>panama</li>
//   <li>paraguay</li>
// </ul>

const makeAutocomplete = () => {
    const countryInput = document.querySelector('input[data-autocomplete-name="country"]');
    const countryUl = document.querySelector('ul[data-autocomplete-name="country"]');
    
    const capitalInput = document.querySelector('input[data-autocomplete-name="capital"]')
    const capitalUl = document.querySelector('ul[data-autocomplete-name="capital"]');
    
    const handlers = async (link, event, ul) => {
      const url = new URL(link, window.location.origin);
      url.searchParams.append('term', event.target.value)
      const response = await fetch(url);
      const list = await response.json();
      ul.innerHTML = '';
    
      if (list.length > 0) {
        await list.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = item;
          ul.append(li)
        })
      }
      if (list.length === 0) ul.innerHTML = '<li>Nothing</li>'
    } 
    
    countryInput.addEventListener('input', (event) => handlers('/countries.json', event, countryUl));
    capitalInput.addEventListener('input', (event) => handlers('/capitals.json', event, capitalUl))
}