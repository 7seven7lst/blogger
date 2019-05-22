import React, { Component } from 'react';
import Editor from 'tui-editor';

let toastEditor;
class ToastEditor extends Component {
  constructor(){
    super();
  };

  componentDidMount(){
    toastEditor = new Editor({
      el: document.querySelector('#editSection'),
      initialEditType: 'wysiwyg', // 'markdown'
      previewStyle: 'vertical',
      height: '300px',
      exts: ['colorSyntax']
    });
  };

  saveArticle = () => {
    const { updateContent } = this.props;
    const content = toastEditor.getHtml();
    updateContent(content);
  };

  render(){
    return (
      <div id="toastEditor">
        <h1>Content Editor with Markdown</h1>
        <div id="editSection"></div>
        <button onClick={this.saveArticle} className="btn_save">Save</button>
      </div>
    );
  };
};

export default ToastEditor;