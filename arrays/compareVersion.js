//сравнить версии 

const compareVersion = (first, second) => {
    const [a1, b1] = first.split('.');
    const [a2, b2] = second.split('.');

    const major = Math.sign(a1 - a2);
    const lesser = Math.sign(b1 - b2);

    return major === 0 ? lesser : major

  };

console.log(compareVersion('2.2', '2.12'));
