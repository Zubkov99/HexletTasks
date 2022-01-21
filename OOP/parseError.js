class ParseError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ParseError';
    }
  }

  const json = '{ "key: "value" }';
  const parseJson = (json) => {
    try {
      return JSON.parse(json)
    } catch (e) {
      throw new ParseError('Invalid JSON string')
    }
  };

  console.log( parseJson(json));
