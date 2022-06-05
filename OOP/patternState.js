// HTTP – протокол без состояния, то есть после запроса получается ответ и на этом всё заканчивается. Не все протоколы так работают. Например, TCP, на базе которого работает интернет, устроен значительно сложнее. В нём сначала происходит соединение между программами на разных компьютерах, затем обмен данными. В конце выполняется разрыв соединения.
// В этом задании TcpConnection не настоящий. Он эмулирует то поведение, которого достаточно для отработки паттерна Состояние, все остальное убрано чтобы не отвлекать от идей ООП.
// Объект соединения ведёт себя по-разному, в зависимости от того, установлено соединение или нет. Например, если попробовать отправить данные, когда соединения нет, то он возбуждает исключение. То же самое касается попытки установить соединение в той ситуации, когда оно уже установлено.

class DisconnectedState {
    constructor(connection) {
      this.connection = connection;
    }
  
    getName() {
      return 'disconnected';
    }
  
    connect() {
      this.connection.setState('connected');
    }
  
    disconnect() {
      throw new Error('Connection already disconnected');
    }
  
    write() {
      throw new Error('It is not possible write to closed connection');
    }
  }
  
  class ConnectedState {
    constructor(connection) {
      this.connection = connection;
    }
  
    connect() {
      throw new Error('Connection has established already');
    }
  
    disconnect() {
      this.connection.setState('disconnected');
    }
  
    write(data) {
      this.connection.buffer.push(data);
    }
  
    getName() {
      return 'connected';
    }
  
  }
  
  class TcpConnection {
    constructor(ip, port) {
      this.states = {
        disconnected: DisconnectedState,
        connected: ConnectedState,
      };
      this.ip = ip;
      this.port = port;
      this.buffer = [];
      this.setState('disconnected');
    }
  
    getCurrentState() {
      return this.state.getName();
    }
  
    connect() {
      this.state.connect();
    }
  
    disconnect() {
      this.state.disconnect();
    }
  
    write(data) {
      this.state.write(data);
    }
  
    setState(name) {
      this.state = new this.states[name](this);
    }
  }
  
  const connection = new TcpConnection('132.223.243.88', 2342);
  
  connection.connect();
  connection.disconnect();
  connection.getCurrentState()