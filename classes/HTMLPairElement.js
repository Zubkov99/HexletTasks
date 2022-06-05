// Реализуйте класс HTMLPairElement (наследуется от HTMLElement), который отвечает за генерацию представления парных элементов и работу с телом. Класс должен содержать следующие методы: toString();getTextContent();setTextContent(body) Реализуйте класс HTMLDivElement, который описывает собой парный тег <div>.

class HTMLElement {
    constructor(attributes = {}) {
      this.attributes = Object.entries(attributes);
    }
  
    stringifyAttributes() {
      if (this.attributes.length === 0) {
        return '';
      }
  
      const line = this.attributes
        .map(([attr, value]) => `${attr}="${value}"`)
        .join(' ');
  
      return ` ${line}`;
    }
  }
  
  class HTMLPairElement extends HTMLElement {
    toString() {
      const attrLine = this.stringifyAttributes();
      const name = this.getTagName();
      const body = this.getTextContent();
      return `<${name}${attrLine}>${body}</${name}>`;
    }
  
    getTextContent() {
      return this.body ?? '';
    }
  
    setTextContent(body) {
      this.body = body;
    }
  }
  
  class HTMLDivElement extends HTMLPairElement {
    getTagName() {
      return 'div';
    }
  };
  
  const div = new HTMLDivElement({ name: 'div', 'data-toggle': true });
  div.setTextContent('Body');
  console.log(div.getTextContent());