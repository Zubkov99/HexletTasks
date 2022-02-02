// Реализуйте функцию normalize() которая принимает на вход список городов и стран, 
// нормализует их имена, сортирует и группирует по стране.

  const normalize = (collection) => {
    collection = collection.sort();
    const result = collection.reduce( (acc, {country, name}) => {
      const normalizeCountry = country.trim().toLowerCase();
      const normalizeName = name.trim().toLowerCase();

      if(!acc.hasOwnProperty(normalizeCountry)) {
        acc[normalizeCountry] = [normalizeName];
      } else if(!acc[normalizeCountry].includes(normalizeName)){
        acc[normalizeCountry].push(normalizeName)
      }
      return acc
    },{})

    for (const item in result) {
      result[item].sort();
    }

    return result
  }

  const countries = [
    { name: 'istanbul', country: 'turkey' },
    { name: 'Moscow ', country: ' Russia' },
    { name: 'iStanbul', country: 'tUrkey' },
    { name: 'antalia', country: 'turkeY ' },
    { name: 'samarA', country: '  ruSsiA' },
    { name: 'Miami', country: 'usa' },
  ];

  normalize(countries);