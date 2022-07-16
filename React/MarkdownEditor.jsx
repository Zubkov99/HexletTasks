// Реализуйте компонент <MarkdownEditor />, который является React оберткой плагина @toast-ui/editor. Этот плагин позволяет встроить в страницу Markdown-редактор.

import '@toast-ui/editor/dist/toastui-editor.css';

import ReactDOM from 'react-dom/client';
import React from 'react';

class MarkdownEditor extends React.Component {
    constructor(props) {
      super(props);
      this.editorRef = React.createRef();
    }
  
    componentDidMount() {
      const editor = new Editor({
        el: this.editorRef.current,
        hideModeSwitch: true,
      });
  
      editor.addHook('change', () => this.onChange(editor));
    }

    onChange = (editor) => {
        const { onContentChange } = this.props;
        onContentChange(editor.getMarkdown());
      }
    
    render() {
      return (
        <div ref={this.editorRef}></div>
      )
    }
  }

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<MarkdownEditor onContentChange={console.log} />);