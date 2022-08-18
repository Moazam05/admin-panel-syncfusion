// React Imports
import React from 'react';
// Syncfusion Imports
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';
// Custom Imports
import Header from '../components/Header';

const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Editor' />
      <RichTextEditorComponent>
        <ul>
          <li>
            <p>Capable of handling markdown editing.</p>
          </li>
          <li>
            <p>
              Contains a modular library to load the necessary functionality on
              demand.
            </p>
          </li>
        </ul>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
