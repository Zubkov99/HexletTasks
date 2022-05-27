// Подписка - это отдельная сущность, которая хранит в себе информацию о самой подписке: когда она началась, сколько продолжается, оплачена ли и так далее. 
// Реализуйте и экспортируйте по умолчанию класс FakeSubscription. В конструктор FakeSubscription принимает пользователя. Если пользователь администратор user.isAdmin(), то все доступы разрешены, если нет – то запрещены. Класс должен повторять интерфейс класса Subscription, то есть иметь те же методы, но со своей логикой.
// Напишите конструктор пользователя, так, чтобы внутри устанавливалась реальная подписка если она передана снаружи и создавалась фейковая в ином случае.

class Subscription {
    constructor(subscriptionPlanName) {
      this.subscriptionPlanName = subscriptionPlanName;
    }
  
    hasProfessionalAccess() {
      return this.subscriptionPlanName === 'professional';
    }
  
    hasPremiumAccess() {
      return this.subscriptionPlanName === 'premium';
    }
  }
  
  class FakeSubscription {
    constructor(user) {
      this.user = user;
    }
  
    hasProfessionalAccess() {
      return this.user.isAdmin();
    }
  
    hasPremiumAccess() {
      return this.user.isAdmin();
    }
  }
  
  class User {
    constructor(email, currentSubscription = null) {
      this.email = email;
      this.currentSubscription = currentSubscription ?? new FakeSubscription(this);
    }
  
    getCurrentSubscription() {
      return this.currentSubscription;
    }
  
    isAdmin() {
      return this.email === 'rakhim@hexlet.io';
    }
  }
  
  const user1 = new User('vasya@email.com', new Subscription('premium'));
  user1.getCurrentSubscription().hasPremiumAccess(); // true
  user1.getCurrentSubscription().hasProfessionalAccess(); // false
   
  const user2 = new User('vasya@email.com', new Subscription('professional'));
  user2.getCurrentSubscription().hasPremiumAccess(); // false
  user2.getCurrentSubscription().hasProfessionalAccess(); // true
   
  const user3 = new User('vasya@email.com');
  user3.getCurrentSubscription().hasPremiumAccess(); // false
  user3.getCurrentSubscription().hasProfessionalAccess(); // false
   
  const user4 = new User('rakhim@hexlet.io'); // администратор, проверяется по емейлу
  user4.getCurrentSubscription().hasPremiumAccess(); // true
  user4.getCurrentSubscription().hasProfessionalAccess(); // true