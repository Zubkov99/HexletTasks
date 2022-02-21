// @ts-nocheck
import _ from 'lodash'

// BEGIN (write your solution here) (write your solution here)

const laptops = [
    {
      model: 'v1', processor: 'intel', frequency: 1.7, memory: 16,
    },
    {
      model: 'd3', processor: 'intel', frequency: 3.5, memory: 8,
    },
    {
      model: 'd2', processor: 'amd', frequency: 2.5, memory: 16,
    },
  ];
  
const app = (data) => {

  const filters = {};

  const render = (data) => {
    const targetBox = document.querySelector('.result');
    const models = _.map(data, 'model');
    targetBox.innerHTML = '';

    if (models.length === 0) return;

    const ul = document.createElement('ul');
    models.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.append(li)
    })
    targetBox.append(ul);
  };

  render(data);
  const controller = () => {
    let minimum = 0;
    let maximum = 10000;

    const processor = document.querySelector('[name="processor_eq"]');
    const memory = document.querySelector('[name="memory_eq"]');
    const frequencyMin = document.querySelector('[name="frequency_gte"]');
    const frequencyMax = document.querySelector('[name="frequency_lte"]');

    processor.addEventListener('change', (event) => {
      filters.processor = event.target.value.toLowerCase();
      if (event.target.value === '') delete filters.processor;
      const result = _.filter(data, filters);
      render(result)
    });
    memory.addEventListener('change', (event) => {
      filters.memory = +event.target.value
      if (event.target.value === '') delete filters.memory
      const result = _.filter(data, filters);
      render(result)
    });
    frequencyMin.addEventListener('input', (event) => {
      minimum = +event.target.value;
      const minData = _.filter(data, function (o) { return o.frequency > minimum && o.frequency  < maximum });
      let result = _.filter(minData, filters);
      if (event.target.value === '') result = _.filter(data, filters)
      render(result)
    })
    frequencyMax.addEventListener('input', (event) => {
      maximum = +event.target.value;
      const maxData = _.filter(data, function (o) { return o.frequency > minimum && o.frequency < maximum })
      let result = _.filter(maxData, filters);
      if (event.target.value === '') result = _.filter(data, filters);
      render(result)
    })
  }
  controller()
};

app(laptops);