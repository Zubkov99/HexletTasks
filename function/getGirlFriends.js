// Реализуйте функцию, которая принимает на вход список пользователей и возвращает список подруг всех пользователей. 
// Друзья каждого пользователя хранятся в виде массива в ключе friends. 
// Пол доступен по ключу gender и может принимать значения male или female.

const users = [
    {
      name: 'Tirion',
      friends: [
        { name: 'Mira', gender: 'female' },
        { name: 'Ramsey', gender: 'male' },
      ],
    },
    { name: 'Bronn', friends: [] },
    {
      name: 'Sam',
      friends: [
        { name: 'Aria', gender: 'female' },
        { name: 'Keit', gender: 'female' },
      ],
    },
    {
      name: 'Rob',
      friends: [
        { name: 'Taywin', gender: 'male' },
      ],
    },
  ];
   


  const getGirlFriends = (users) => {
    const result = users.map(({ friends }) => friends)
      .flat()
      .filter(item => item.gender === 'female');
  
    return result
  }

  getGirlFriends(users);
  