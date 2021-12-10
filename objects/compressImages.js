import _ from 'lodash';

// Реализуйте функцию compressImages(), которая принимает на вход директорию, находит внутри нее картинки 
// и "сжимает" их. Под сжиманием понимается уменьшение свойства size в метаданных в два раза. 
// Функция должна вернуть новую директорию со сжатыми картинками и всеми остальными данными, 
// которые были внутри этой директории.Картинками считаются все файлы заканчивающиеся на .jpg.


const compressImages = (data) => {
    const newData = _.cloneDeep(data);
    newData.children.map(item => {
        if (_.has(item, 'meta') && item.name.endsWith('.jpg')) {
            return item.meta.size = item.meta.size / 2;
        }
        return item
    });
    return newData;
}


const data = {
       name: 'documents',
       children: [
         { name: 'avatar.jpg', type: 'directory' },
        { name: 'passport.jpg', meta: {size: 200}, type: 'file' },
        { name: 'family', meta: {size: 50}, type: 'file' }
       ],
        meta: {},
       type: 'directory',
};

compressImages(data);