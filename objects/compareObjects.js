const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', website: 'https://hexlet.io', state: 'published' };

const compareObjects = (firstObj, secondObj) => {
    for(let key in secondObj) {
        if(firstObj[key] != secondObj[key]) {
            return false
        }
    }
    return true
};

console.log(compareObjects(company1, company2));