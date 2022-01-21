// Класс Time, предназначен для создания объекта-времени. 
// Его конструктор принимает на вход количество часов и минут в виде двух отдельных параметров.
// Добавьте в класс Time статический метод fromString(), который позволяет создавать инстансы 
// Time на основе времени переданного строкой формата часы:минуты.

class Time {

    static fromString(timeLine) {
        const [hours, minutes] = timeLine.split(':');
        return new Time(hours, minutes);
    }
 
    constructor(hours, minutes) {
      this.minutes = minutes;
      this.hours = hours;
    }
  
    toString() {
      return `${this.hours}:${this.minutes}`;
    }
  };

  const time = Time.fromString('10:23');
  console.log(`This time is ${time}`);

