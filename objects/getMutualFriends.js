// Реализуйте функцию getMutualFriends(), которая принимает на вход двух пользователей и возвращает массив
// состоящий из общих друзей этих пользователей

const makeUser = ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});

const user1 = makeUser({
  friends: [
    makeUser({ id: 1 }),
    makeUser({ id: 2 }), // общий друг
  ],
});

const user2 = makeUser({
  friends: [
    makeUser({ id: 2 }), // общий друг
    makeUser({ id: 3 }),
  ],
});
 
const getMutualFriends = (user1, user2) => {

  const getFriendsId = (obj) => {
   return obj.friends.map( item => {
      return item.id
    })
  }
  const firstFriendIds = getFriendsId(user1);
  const secondFriendIds = getFriendsId(user2);
  return firstFriendIds.filter( item => secondFriendIds.includes(item))
  .map( item => makeUser({id: item}))
}
console.log(getMutualFriends(user1, user2));
