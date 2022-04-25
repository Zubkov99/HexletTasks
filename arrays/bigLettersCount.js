const bigLettersCount = (str) => {
    let counter = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i].toUpperCase() === str[i] || str[i] === ' ') {
            counter++
        };
    };

    return counter
  }

  const compare = (first, second) => {
    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);
    
    if(firstCount > secondCount) {
        return 1
    } else if(firstCount < secondCount) {
        return -1
    }
        return 0

  };

  console.log(compare('aaBBcDcF', 'AA AA'));
