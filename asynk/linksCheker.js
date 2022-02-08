import { URL } from 'url';
import axios from 'axios';

// Реализуйте функцию, которая принимает на вход ссылку на страницу какого-то сайта, 
// загружает содержимое этой страницы, извлекает из него ссылки и проверяет их доступность. 
// Функция должна вернуть список битых ссылок.

const extractLinks = (content) => {
  const host = 'http://localhost:8080';
  const linkRx = /href="(.+?)"/ig;
  const results = content.matchAll(linkRx);
  return Array.from(results).map((r) => r[1])
    .map((rawLink) => new URL(rawLink, host).toString());
};

const checker = async (website) => {
  const siteResponse = await axios.get(website);
  const links = extractLinks(siteResponse.data);
  const promise = links.map( item => {
    return axios.get(item)
    .then(() => null)
    .catch(() => item)
  })
 
 return Promise.all(promise)
  .then((data) => data.filter(item => typeof item === 'string' && !item.includes('local')))
}
const links = await checker('https://www.google.com/');
// console.log(links);