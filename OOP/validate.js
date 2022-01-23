// Реализуйте и экспортируйте по умолчанию класс PasswordValidator, ориентируясь на тесты.
// Этот валидатор поддерживает следующие опции:
// minLength (по умолчанию 8) - минимальная длина пароля
// containNumbers (по умолчанию true) - требование содержать хотя бы одну цифру
// Опции передаются одним объектом в конструктор валидатора.

const hasNumber = (string) => (string.search(/\d/) !== -1);

  class PasswordValidator {
    constructor({minLength = 8, containNumbers = true} = {}) {
      this.containNumbers = containNumbers;
      this.minLength = minLength;
    }
  
    validate(password) {
      const response = {};
      console.log(this.minLength);
      if(password.length < this.minLength) {
        response['minLength'] = 'too small';
      }
      if(this.containNumbers && !hasNumber(password)) {
        response['containNumbers'] = 'should contain at least one number';
      }
      return response
    }
  }

  const validate = new PasswordValidator();
  const errors2 = validate.validate('qwerty');
  const errors3 = validate.validate('q23ty');
  
  const validator = new PasswordValidator({ minLength: 0, containNumbers: null });
  const errors1 = validator.validate('');
